import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import ItemListContainer from "../ItemListContainer/ItemListContainer"

const Layout = (children) => {
    return(
        <div className="container-fluid d-flex flex-column p-0 min-vh-100">
            <NavBar />
            <ItemListContainer greeting="El greeting a pasar"/>
            <Footer />
        </div>
    )
}

export default Layout