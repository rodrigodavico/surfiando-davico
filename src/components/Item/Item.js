import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import CartContext from '../../context/CartContext'

const Item = ({item, path}) => {
    const [itemCount, setItemCount] = useState(item.stock ? 1 : 0)
    const [boughtItem, setBoughtItem] = useState(false)
    const addItems = useContext(CartContext).addItems

    let history = useHistory()
    
    function goItem(id) {
        history.push(`/item/${id}`)
    }

    function goCart() {
        history.push(`/cart/`)
    }

    function buyItems(item, qty) {
        setBoughtItem(true)
        addItems({item, qty})
    }

    return(
        <div className="card col-6 col-md-4 justify-content-evenly">
            <img src={path ? '../' + item.pictureUrl : item.pictureUrl} alt="item pic" className="card-img-top" onClick={() => goItem(item.id)}></img>
            <div className="card-body flex-grow-0">
                <span className="fs-3 fw-normal" onClick={() => goItem(item.id)}>{item.title}</span>
                <p className="fw-light">{item.description}</p>
                <span className="fw-light text-primary">Precio: ${item.price}</span>
                {itemCount ?
                    <div className="input-group rounded-0 align-items-center justify-content-evenly">
                        <button className="btn btn-outline-secondary rounded-0" type="button" onClick={() => (itemCount > 1) ? setItemCount(itemCount-1) : false}>-</button>
                        <span className="">{itemCount}</span>
                        <button className="btn btn-outline-secondary rounded-0" type="button" onClick={() => (itemCount < item.stock) ? setItemCount(itemCount+1) : false}>+</button>
                    </div>
                    :
                    <div className="p-2">
                        <span className="text-danger fs-5">No hay stock</span>
                    </div> 
                }
                {itemCount ? <button className="btn btn-primary rounded-0 mt-3" onClick={() => item.stock ? buyItems(item, itemCount) : false}>Agregar al carrito</button> : false}
                {boughtItem ? <button className="btn btn-secondary rounded-0 mt-3" onClick={() => goCart()}>Terminar la compra</button> : false}
            </div>
        </div>
    )
}

export default Item