import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

import OrderItem from '../OrderItem/OrderItem'
import SessionContext from '../../context/SessionContext'
import orderLoader from "../../utils/orderLoader"

const Order = () => {
    const { id } = useParams()
    const [order, setOrder] = useState(false)
    const user = useContext(SessionContext).user
    
    useEffect(() => {
        orderLoader(id).then(res => {
            setOrder(res)
        })
    }, [id])

    return(
        <div className="container d-flex justify-content-evenly p-4">
            <div className="card w-75">
                {user && order && user.id === order.buyer.id ?
                    <>
                        <div className="card-header text-secondary">
                            Order: {order.id}
                        </div>
                        <div className="cart-body text-center rounded-0">
                            <div className="my-2 text-start px-4">
                                <span className="fst-italic fw-light">Nombre: {user.name}</span>
                                <br></br>
                                <span className="fst-italic fw-light">Email: {user.email}</span>
                            </div>
                            {order.items.map(({item, qty}) =><OrderItem item={item} qty={qty} key={item.id}></OrderItem>)}
                        </div>
                        <div className="card-footer text-end fs-5 text-secondary">
                            Total: <span className="text-primary fw-bold ms-3">$ {order.total}</span>
                        </div>
                    </>
                    :
                    <>
                        <div className="card-header text-secondary">
                            Order Viewer
                        </div>
                        <div className="cart-body text-center rounded-0 p-5">
                            Tiene que estar logueado para poder ver las órdenes
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Order