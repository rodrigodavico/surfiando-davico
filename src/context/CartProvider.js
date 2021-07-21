import { useState } from 'react'
import CartContext from './CartContext'

const CartProvider = ({ defaultValue = [], children }) => {
    const [cart, setCart] = useState(defaultValue)
    const [itemsCount, setItemsCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    function getFromCart(id) {
        return cart.find(item => item.item.id === id)
    }

    function inCart(id) {
        return id === undefined ? undefined : getFromCart(id) !== undefined
    }

    function updateTotal(operation, price) {
        switch(operation) {
            case '+':
                setCartTotal(cartTotal+price)
                break;
            case '-':
                setCartTotal(cartTotal-price)
                break;
            default:
                console.log('ERROR: incorrect operation')
                break;
        }
    }

    function addItems({item, qty}) {
        // if item is already in cart, update it, else add it.
        if(inCart(item.id)) {
            if(!checkStock(item, qty))
                return false                
            let updatedCart = cart
            let updatedItem = cart.find(el => el.item.id === item.id)
            updatedItem.qty += qty
            updatedCart.splice(updatedCart.findIndex(el => el.item.id === item.id), 1, updatedItem)
            setCart(updatedCart)
        } else {
            if(!checkStock(item, qty))
                return false
            checkStock(item, qty)
            setCart([...cart, {item, qty}])
        }

        setItemsCount(itemsCount+qty)
        updateTotal('+', item.price*qty)
    }

    function removeItems({item, qty}) {
        // item to remove SHOULD be in cart, if not it's an error.
        if(inCart(item.id)) {
            let updatedCart = cart
            let updatedItem = cart.find(el => el.item.id === item.id)
            // if amount to remove is less than the current amount in cart, remove and update cart.
            // if amount to remote is more, possible error. Just delete all items.
            if(updatedItem.qty > qty) {
                updatedItem.qty -= qty
                updatedCart.splice(updatedCart.findIndex(el => el.item.id === item.id), 1, updatedItem)
                setCart(updatedCart)

                setItemsCount(itemsCount-qty)
                updateTotal('-', item.price*qty)
            } else {
                clearItems(item)
            }
        } else {
            console.log("ERROR: Item not found in cart!")
        }
    }

    // function to clear all the same items in cart.
    function clearItems(item) {
        let updatedCart = cart
        let removedItem = cart.find(el => el.item.id === item.id)
        updatedCart.splice(updatedCart.findIndex(el => el.item.id === item.id), 1)
        setItemsCount(itemsCount-removedItem.qty)
        updateTotal('-', item.price*removedItem.qty)
    }

    // function to clear all items from the cart.
    function clearCart() {
        setCart([])
        setItemsCount(0)
        setCartTotal(0)
    }

    // function to check if there's stock available for the quantity required.
    function checkStock(item, qty) {
        if(inCart(item.id)) {
            let cartItem = cart.find(el => el.item.id === item.id)
            return (cartItem.qty+qty <= item.stock) ? true : false
        } else {
            return (qty <= item.stock) ? true : false
        }
    }

    return(
        <CartContext.Provider value={{cart, cartTotal, itemsCount, addItems, removeItems, clearItems, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider