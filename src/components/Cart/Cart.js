import { CartContext } from '../../context/CartProvider'
import { useContext } from 'react'

const Cart = () => {
    console.log(useContext(CartContext).cart)
    return (
        <div className="container text-center">
            <h1>Carrito vacío</h1>
        </div>
    )
}

export default Cart