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
        if(user) {
            // create order
            let cartInOrder = cart
            cartInOrder.map(({item, qty}) => delete item.stock)
            const order = {
                buyer: user,
                items: cartInOrder,
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: cartTotal
            }
            // push order to firebase and redirect to order details page.
            saveOrder(order).then(res => {
                goOrderDetails(res)
            }).catch((error) => {
                console.log("Error saving order!")
            })
            
        } else {
            goLogin()
        }
    }

    return (
        <div className="container text-center py-5">
            {itemsCount ? 
                cart.map(({item, qty}) => <CartItem item={item} qty={qty} key={item.id}></CartItem>)
                :
                <div>
                    <h1>Carrito vacío</h1>
                    <button className="btn btn-primary rounded-0 my-2" onClick={() => goHome()}>Volver</button>
                </div>
            }
            {itemsCount ?
                <div className="container text-center py-5">
                    <h2>Total</h2>
                    <div className="row align-items-center">
                        <span className="fw-light fs-5">$ {cartTotal} ARS</span>
                        <button className="btn btn-primary rounded-0 my-2" onClick={() => buyItems()}>Comprar</button>
                    </div>
                </div>
                :
                false
            }
        </div>
    )
}

export default Cart