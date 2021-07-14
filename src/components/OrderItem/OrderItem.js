const OrderItem = ({item, qty}) => {    
    return(
        <div className="card p-2 rounded-0">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={'../' + item.pictureUrl} className="img-fluid" style={{ "maxHeight": '200px' }} alt="product"></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text"><small className="text-muted">{item.description}</small></p>
                        <p className="card-text"><small className="text-primary">Precio x unidad: {item.price}</small></p>
                        <p className="card-text mx-2 text-end"><small className="text-primary">Cantidad: {qty}</small></p>
                        <p className="card-text mx-2 text-end"><small className="text-primary">Subtotal: $ {item.price*qty}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderItem