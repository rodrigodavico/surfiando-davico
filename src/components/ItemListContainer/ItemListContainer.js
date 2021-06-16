import { useState, useEffect } from 'react'
import ItemList from "../ItemList/ItemList"
import itemsLoader from "../../utils/itemsLoader"

const ItemDetailContainer = () => {
    const [items, setItems] = useState([])
    
    useEffect(() => {
        itemsLoader.then(res => {
            setItems(res)
        })
    }, [])

    return(
        <div className="container-fluid text-center p-4">
            {
                <ItemList items={items}></ItemList>
            }
        </div>
    )
}

export default ItemDetailContainer;