import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import itemLoader from "../../utils/itemLoader"
import Spinner from "../Layout/Spinner"

const ItemDetailContainer = () => {
    const [item, setItem] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        itemLoader(id).then(res => {
            setItem(res)
        })
    }, [id])

    return(
        <div className="container d-flex justify-content-evenly text-center p-4">
            {item ? 
                <ItemDetail item={item}></ItemDetail>
                :
                <Spinner></Spinner>
            }
        </div>
    )
}

export default ItemDetailContainer;