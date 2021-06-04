import { useState } from 'react'

const CartButton  = () => {
    const [cartItems, setCartItems] = useState(0)
    return(
        <button 
        onClick={() => setCartItems(cartItems+1)}
        className="btn btn-outline-secondary rounded-0 ms-auto">
            <i className="bi-cart-check-fill"></i> {cartItems}
        </button>
    )
}

export default CartButton