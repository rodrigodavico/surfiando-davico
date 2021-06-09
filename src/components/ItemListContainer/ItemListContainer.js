import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({items}) => {
    return(
        <div className="container-fluid text-center row p-4">
            {
                items.map(item => {
                    return (
                        <ItemCount key={item.id} item={item}></ItemCount>
                    )
                })
            }
        </div>
    )
}

export default ItemListContainer;