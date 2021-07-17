import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase/app'
import '@firebase/firestore'

import CartItem from '../CartItem/CartItem'
import CartContext from '../../context/CartContext'
import SessionContext from '../../context/SessionContext'

import saveOrder from '../../utils/saveOrder'

const Cart = () => {
    const cart = useContext(CartContext).cart
    const itemsCount = useContext(CartContext).itemsCount
    const cartTotal = useContext(CartContext).cartTotal
    const clearCart = useContext(CartContext).clearCart
    const user = useContext(SessionContext).user

    let history = useHistory()

    function goHome() {
        history.push('/')
    }

    function goOrderDetails(order) {
        history.push(`/order/${order}`)
    }

    function goLogin() {
        history.push('/login')
    }

    function buyItems() {
        // if user is logged, create order, if not redirect to login.
        if(user) {
            // create order.
            let cartInOrder = cart
            cartInOrder.map(({item, qty}) => delete item.stock)
            const order = {
                buyer: user,
                items: cartInOrder,
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: cartTotal
            }
            // push order to firebase, clear cart and redirect to order details page.
            saveOrder(order).then(res => {
                clearCart()
                goOrderDetails(res)
            }).catch((error) => {
                console.log("Error saving order!", error)
            })
            
        } else {
            goLogin()
        }
    }

    return (
        <div className="container text-center py-5">
            {itemsCount ? 
                <div className="container text-center py-5">
                    {cart.map(({item, qty}) => <CartItem item={item} qty={qty} key={item.id}></CartItem>)}
                    <h2>Total</h2>
                    <div className="row align-items-center">
                        <span className="fw-light fs-5">$ {cartTotal} ARS</span>
                        <div>
                            <button className="btn btn-primary rounded-0 my-2 col-6" onClick={() => buyItems()}><i className="bi-cart"></i> Finalizar compra</button>
                            <button className="btn btn-danger rounded-0 my-2 col-4" onClick={() => clearCart()}><i className="bi-cart-x"></i> Limpiar</button>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <h1>Carrito vacío</h1>
                    <button className="btn btn-primary rounded-0 my-2" onClick={() => goHome()}>Volver</button>
                </div>
            }
        </div>
    )
}

export default Cart