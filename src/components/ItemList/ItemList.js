import Item from '../Item/Item'

const ItemList = ({items, path}) => {
    return(
        <div className="row">
            {items.map(item => <Item key={item.id} item={item} path={path}></Item>)}
        </div>
    )
}

export default ItemList