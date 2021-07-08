import { useState, useContext } from 'react'

import CartContext from '../../context/CartContext'

const CartItem = ({item, qty}) => {
    const [itemCount, setItemCount] = useState(qty)
    const removeItems = useContext(CartContext).removeItems
    const addItems = useContext(CartContext).addItems

    function onRemove(item) {
        //TODO
        //removeItems(item, 1)
    }

    function onAdd(item) {
        //TODO
        //addItems(item, 1)
    }
    
    return(
        <div className="card mb-3 p-2" key={item.id}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={'../' + item.pictureUrl} className="img-fluid rounded-start" style={{ "max-height": '200px' }} alt="product-image"></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text"><small className="text-muted">{item.desc}</small></p>
                    </div>
                    <div className="input-group mb-3 col-2 px-5">
                        <button className="btn btn-outline-secondary rounded-0" type="button" onClick={() => onRemove(item)}><i className="bi-chevron-left"></i></button>
                        <input type="text" className="form-control" value={qty} disabled="true" />
                        <button className="btn btn-outline-secondary rounded-0" type="button" onClick={() => onAdd(item)}><i className="bi-chevron-right"></i></button>
                    </div>
                    <button className="btn btn-outline-secondary rounded-0" type="button" id="button-addon2"><i className="bi-cart-x"> Remove items</i></button>
                </div>
            </div>
        </div>
    )
}

export default CartItem