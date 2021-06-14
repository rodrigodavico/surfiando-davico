import { useState } from 'react'
import Item from '../Item/Item'

const ItemCount = ({items}) => {
    const [itemCount, setItemCount] = useState(items.length ? 1 : 0)

    function onAdd(qty) {
        console.log(qty)
    }

    return(
        <div className="card col-6 col-md">
            <div className="card-body">
                {items.map(item => <Item item={item}></Item>)}
                <div className="input-group rounded-0 align-items-center justify-content-evenly">
                    <button className="btn btn-outline-secondary rounded-0" type="button" onClick={() => (itemCount > 1) ? setItemCount(itemCount-1) : false}>-</button>
                    <span className="">{itemCount}</span>
                    <button className="btn btn-outline-secondary rounded-0" type="button" onClick={() => (itemCount < items.length) ? setItemCount(itemCount+1) : false}>+</button>
                </div>
                <button className="btn btn-primary rounded-0 mt-3" onClick={() => items.length ? onAdd(itemCount) : false}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount