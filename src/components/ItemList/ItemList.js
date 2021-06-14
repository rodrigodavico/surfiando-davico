import Item from '../Item/Item'

const ItemList = ({items}) => {
    return(
        <div className="row">
            {items.map(item => <Item key={item.id} item={item}></Item>)}
        </div>
    )
}

export default ItemList