import { useState, useEffect } from 'react'
import ItemList from "../ItemList/ItemList"

const source = [
    {
        id: 1,
        pictureUrl: '/assets/images/products/1.webm',
        title: 'Tabla de surf',
        desc: 'Es una tabla re cool.',
        price: 100,
        stock: 10,
    },
    {
        id: 2,
        pictureUrl: '/assets/images/products/2.webm',
        title: 'Googles',
        desc: 'Para ver bajo el agua.',
        price: 100,
        stock: 15,
    },
    {
        id: 3,
        pictureUrl: '/assets/images/products/3.webm',
        title: 'Traje de ñoba',
        desc: 'Atalo bien que se sale sino.',
        price: 100,
        stock: 2,
    },
    {
        id: 4,
        pictureUrl: '/assets/images/products/4.webm',
        title: 'Traje de neopreno',
        desc: 'Apretadito!',
        price: 100,
        stock: 0,
    },
    {
        id: 5,
        pictureUrl: '/assets/images/products/5.webm',
        title: 'Silbato de bañero',
        desc: 'Chifla!',
        price: 100,
        stock: 11,
    }
]




const ItemListContainer = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const itemLoader = new Promise(res => {
            setTimeout(() => res(source), 2000)
        })
        
        itemLoader.then(res => {
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

export default ItemListContainer;