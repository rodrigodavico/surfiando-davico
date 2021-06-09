import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import ItemListContainer from "../ItemListContainer/ItemListContainer"

const items = [
    {
        id: 1,
        title: 'Tabla de surf',
        desc: 'Es una tabla re cool.',
        stock: 10,
    },
    {
        id: 2,
        title: 'Googles',
        desc: 'Para ver bajo el agua.',
        stock: 15,
    },
    {
        id: 3,
        title: 'Traje de ñoba',
        desc: 'Atalo bien que se sale sino.',
        stock: 2,
    },
    {
        id: 4,
        title: 'Traje de neopreno',
        desc: 'Apretadito!',
        stock: 0,
    }
]

const Layout = () => {
    return(
        <div className="container-fluid d-flex flex-column min-vh-100 p-0">
            <NavBar />
            <ItemListContainer items={items}/>
            <Footer />
        </div>
    )
}

export default Layout