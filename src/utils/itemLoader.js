const source = [
    {
        id: 1,
        pictureUrl: './assets/images/products/1.webp',
        title: 'Tabla de surf',
        desc: 'Es una tabla re cool.',
        price: 3600,
        category: 1,
        stock: 10,
    },
    {
        id: 2,
        pictureUrl: './assets/images/products/2.webp',
        title: 'Googles',
        desc: 'Para ver bajo el agua.',
        price: 1500,
        category: 3,
        stock: 15,
    },
    {
        id: 3,
        pictureUrl: './assets/images/products/3.webp',
        title: 'Traje de ñoba',
        desc: 'Atalo bien que se sale sino.',
        price: 850,
        category: 2,
        stock: 2,
    },
    {
        id: 4,
        pictureUrl: './assets/images/products/4.webp',
        title: 'Traje de neopreno',
        desc: 'Apretadito!',
        price: 5200,
        category: 2,
        stock: 0,
    },
    {
        id: 5,
        pictureUrl: './assets/images/products/5.webp',
        title: 'Silbato de bañero',
        desc: 'Chifla!',
        price: 600,
        category: 3,
        stock: 11,
    },
    {
        id: 6,
        pictureUrl: './assets/images/products/6.webp',
        title: 'Tabla Cool',
        desc: 'Para surfiar!',
        price: 4900,
        category: 1,
        stock: 2,
    },
    {
        id: 7,
        pictureUrl: './assets/images/products/7.webp',
        title: 'Llavero Surfiando',
        desc: 'no pierdas las llaves!',
        price: 350,
        category: 4,
        stock: 29,
    },
    {
        id: 8,
        pictureUrl: './assets/images/products/8.webp',
        title: 'Patas de rana',
        desc: 'Croack Croack',
        price: 2970,
        category: 3,
        stock: 6,
    }
]


const itemLoader = (id) => {
    return new Promise(res => setTimeout(() => res(source.filter(elem => elem.id === parseInt(id))), 2000))
}


export default itemLoader