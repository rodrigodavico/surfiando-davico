const source = [
    {
        id: 1,
        pictureUrl: '/assets/images/products/1.webp',
        title: 'Tabla de surf',
        desc: 'Es una tabla re cool.',
        price: 100,
        stock: 10,
    },
    {
        id: 2,
        pictureUrl: '/assets/images/products/2.webp',
        title: 'Googles',
        desc: 'Para ver bajo el agua.',
        price: 100,
        stock: 15,
    },
    {
        id: 3,
        pictureUrl: '/assets/images/products/3.webp',
        title: 'Traje de ñoba',
        desc: 'Atalo bien que se sale sino.',
        price: 100,
        stock: 2,
    },
    {
        id: 4,
        pictureUrl: '/assets/images/products/4.webp',
        title: 'Traje de neopreno',
        desc: 'Apretadito!',
        price: 100,
        stock: 0,
    },
    {
        id: 5,
        pictureUrl: '/assets/images/products/5.webp',
        title: 'Silbato de bañero',
        desc: 'Chifla!',
        price: 100,
        stock: 11,
    }
]


const itemLoader = (id) => {
    return new Promise(res => setTimeout(() => res(source.filter(elem => elem.id === parseInt(id))), 2000))
}


export default itemLoader
//export default new Promise(res => setTimeout(() => res(source.filter(elem => elem.id === 2)), 2000))