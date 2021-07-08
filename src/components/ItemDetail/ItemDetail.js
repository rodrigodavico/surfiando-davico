import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'

const ItemDetail = ({item}) => {
    const [itemCount, setItemCount] = useState(0)
    const addItems = useContext(CartContext).addItems

    let history = useHistory()

    function goCart() {
        history.push('/cart')
    }

    function onAdd(qty) {
        setItemCount(qty)
    }

    function buyItems(item, qty) {
        addItems({item: item, qty})
        goCart()
    }
    
    return(
        <div className="card w-75">
            <img src={'../'+item.pictureUrl} alt="item pic" className="card-img-top img-fluid"></img>
            <div className="card-body">
                <span className="fs-3 fw-normal">{item.title}</span>
                <p className="fw-light">{item.desc}</p>
                <span className="fw-light text-primary">Precio: ${item.price}</span>
                <ItemCount item={item} addItems={onAdd}></ItemCount>
            </div>
            {itemCount > 0 && <button className="btn btn-primary rounded-0 mt-3" onClick={() => buyItems(item, itemCount)}>Terminar la compra</button>}
        </div>
    )
}

export default ItemDetail