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
        }
    }

    function addItems({item, qty}) {
        if(item.id && inCart(item.id)) {
            const newCart = cart.map(
                ({cartItem, cartQty}) => {
                    if(cartItem.id === item.id) {
                        cartQty+=qty
                        return {item: cartItem, cartQty}
                    } else {
                        return {cartItem, cartQty}
                    }
                })
            console.log('item count updated!')
            updateTotal('+', item.price*qty)
            setCart(newCart)
        }
        setItemsCount(itemsCount+qty)
        updateTotal('+', item.price*qty)
        setCart([...cart, {item, qty}])
    }

    function removeItems({item, qty}) {
        //TODO
        console.log('removed item!', item, qty)
    }

    function clearItems() {
        //TODO
        console.log('remove items group!')
    }

    return(
        <CartContext.Provider value={{cart, cartTotal, itemsCount, addItems, removeItems, clearItems, inCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider