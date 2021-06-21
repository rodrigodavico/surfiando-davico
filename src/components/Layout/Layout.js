import { BrowserRouter, Switch, Route } from "react-router-dom"

import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import TyC from "../TyC/TyC"

import ItemListContainer from "../ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"


const Layout = () => {
    return(
        <div className="container-fluid d-flex flex-column min-vh-100 p-0">
            <BrowserRouter>
                <NavBar />                
                    <Switch>
                        <Route exact path="/">
                            <ItemListContainer/>
                        </Route>
                        <Route path="/category/:id">
                            <ItemListContainer/>
                        </Route>
                        <Route path="/item/:id">
                            <ItemDetailContainer/>
                        </Route>
                        <Route path="/tyc">
                            <TyC/>
                        </Route>
                    </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Layout