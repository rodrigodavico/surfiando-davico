import React, { useState } from 'react'

const CartContext = React.createContext()

const CartProvider = ({ defaultValue = [], children }) => {
    const [cart, setCart] = useState(defaultValue)

    function getFromCart(id) {
        return cart.find(item => item.item.id === id)
    }

    function inCart(id) {
        return id === undefined ? undefined : getFromCart(id) !== undefined
    }

    function addItem({item, qty}) {
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
            setCart([newCart])
        }
        console.log('item added to cart!')
        setCart([...cart, {item, qty}])
    }

    /*
    function removeItem(item) {
        //TODO
    }

    function clear() {
        setCart([])
    }
    */

    return(
        <CartContext.Provider value={{cart, addItem, inCart}}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }