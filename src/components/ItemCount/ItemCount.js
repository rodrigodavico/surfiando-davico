import { useState } from 'react'

const ItemCount = ({item, addItems}) => {
    const [itemCount, setItemCount] = useState(item.stock ? 1 : 0)

    function onAdd(qty) {
        addItems(qty)
    }

    return(
        <div className="card-body">
            <div className="input-group rounded-0 align-items-center justify-content-evenly">
                <button className="btn btn-outline-secondary rounded-0" type="button" onClick={() => (itemCount > 1) ? setItemCount(itemCount-1) : false}>-</button>
                <span className="">{itemCount}</span>
                <button className="btn btn-outline-secondary rounded-0" type="button" onClick={() => (itemCount < item.stock) ? setItemCount(itemCount+1) : false}>+</button>
            </div>
            <button className="btn btn-primary rounded-0 mt-3" onClick={() => item.stock ? onAdd(itemCount) : false}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount