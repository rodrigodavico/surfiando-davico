import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import CartItem from '../CartItem/CartItem'
import CartContext from '../../context/CartContext'

const Cart = () => {
    const cart = useContext(CartContext).cart
    const itemsCount = useContext(CartContext).itemsCount
    const cartTotal = useContext(CartContext).cartTotal
    let history = useHistory()

    function goHome() {
        history.push('/')
    }

    return (
        <div className="container text-center">
            {itemsCount ? 
                cart.map(({item, qty}) => <CartItem item={item} qty={qty}></CartItem>)
                :
                <div>
                    <h1>Carrito vacío</h1>
                    <button onClick={() => goHome()}>Go Back</button>
                </div>
            }
            {itemsCount ?
                <div>
                    <h2>Total</h2>
                    <span>{cartTotal}</span>
                </div>
                :
                false}
        </div>
    )
}

export default Cart