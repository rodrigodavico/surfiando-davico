import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemList from "../ItemList/ItemList"
import itemsLoader from "../../utils/itemsLoader"

const ItemDetailContainer = () => {
    const [items, setItems] = useState([])
    const { id } = useParams()
    
    useEffect(() => {
        itemsLoader(id).then(res => {
            setItems(res)
        })
    }, [id])

    return(
        <div className="container text-center p-4">
            {
                <ItemList items={items} path={id}></ItemList>
            }
        </div>
    )
}

export default ItemDetailContainer;