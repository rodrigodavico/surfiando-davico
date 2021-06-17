import { useState } from 'react'
import { useHistory } from 'react-router'

const Item = ({item, path}) => {
    const [itemCount, setItemCount] = useState(item.stock ? 1 : 0)
    const history = useHistory()
    const redirect = (id) => {
        history.push(`/item/${id}`)
    }

    function onAdd(qty) {
        console.log(qty)
    }

    return(
        <div className="card col-6 col-md-4">
            <img src={path ? '../' + item.pictureUrl : item.pictureUrl} alt="item pic" className="card-img-top" onClick={() => redirect(item.id)}></img>
            <div className="card-body">
                <span className="fs-3 fw-normal" onClick={() => redirect(item.id)}>{item.title}</span>
                <p className="fw-light">{item.desc}</p>
                <span className="fw-light text-primary">Precio: ${item.price}</span>
                <div className="input-group rounded-0 align-items-center justify-content-evenly">
                    <button className="btn btn-outline-secondary rounded-0" type="button" onClick={() => (itemCount > 1) ? setItemCount(itemCount-1) : false}>-</button>
                    <span className="">{itemCount}</span>
                    <button className="btn btn-outline-secondary rounded-0" type="button" onClick={() => (itemCount < item.stock) ? setItemCount(itemCount+1) : false}>+</button>
                </div>
                <button className="btn btn-primary rounded-0 mt-3" onClick={() => item.stock ? onAdd(itemCount) : false}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Item