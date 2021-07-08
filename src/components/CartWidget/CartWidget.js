import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import CartContext from '../../context/CartContext'

const CartWidget  = () => {
    const itemsCount = useContext(CartContext).itemsCount
    let history = useHistory()

    function goCart() {
        history.push('/cart')
    }

    return(
        <button 
        onClick={() => goCart()}
        className="btn btn-outline-secondary rounded-0 ms-auto">
            <i className="bi-cart-check-fill"></i> {itemsCount ? itemsCount : false}
        </button>
    )
}

export default CartWidget