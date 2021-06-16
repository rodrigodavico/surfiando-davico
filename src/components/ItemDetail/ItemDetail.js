const ItemDetail = ({item}) => {
    
    return(
        <div className="card w-75">
            <img src={item.pictureUrl} alt="item pic" className="card-img-top"></img>
            <div className="card-body">
                <span className="fs-3 fw-normal">{item.title}</span>
                <p className="fw-light">{item.desc}</p>
                <span className="fw-light text-primary">Precio: ${item.price}</span>
            </div>
        </div>
    )
}

export default ItemDetail