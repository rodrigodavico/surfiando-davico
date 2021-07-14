import { BrowserRouter, Switch, Route } from "react-router-dom"

import NavBar from "./NavBar"
import Footer from "./Footer"
import Cart from "../Cart/Cart"
import TyC from "../TyC/TyC"
import Login from "../Login/Login"
import Logout from "../Logout/Logout"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import OrderDetailContainer from "../OrderDetailContainer/OrderDetailContainer"


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
                        <Route path="/order/:id">
                            <OrderDetailContainer/>
                        </Route>
                        <Route exact path="/cart">
                            <Cart/>
                        </Route>
                        <Route path="/tyc">
                            <TyC/>
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/logout">
                            <Logout/>
                        </Route>
                    </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Layout