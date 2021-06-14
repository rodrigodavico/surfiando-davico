import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import ItemListContainer from "../ItemListContainer/ItemListContainer"


const Layout = () => {
    return(
        <div className="container-fluid d-flex flex-column min-vh-100 p-0">
            <NavBar />
                <ItemListContainer/>
            <Footer />
        </div>
    )
}

export default Layout