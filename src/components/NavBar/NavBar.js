import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/images/surfiando-logo.png'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
            <div className="container-fluid">
                <NavLink className="navbar-brand me-auto" to={"/"}>
                    <img src={logo} alt="" width="30" height="30" className="d-inline-block align-text-top"></img>
                    <span className="ms-4">Surfiando App</span>
                </NavLink>
                
                <ul className="navbar-nav d-none d-md-flex ms-auto">
                    <li><NavLink className="nav-link" activeClassName="text-primary" to={"/category/1"}>Tablas 🏄</NavLink></li>
                    <li><NavLink className="nav-link" activeClassName="text-primary" to={"/category/2"}>Trajes 🩳</NavLink></li>
                    <li><NavLink className="nav-link" activeClassName="text-primary" to={"/category/3"}>Insumos 🤿</NavLink></li>
                    <li><NavLink className="nav-link" activeClassName="text-primary" to={"/category/4"}>Merchandising 🏊</NavLink></li>
                </ul>
                

                <div className="nav-item dropdown d-md-none ms-auto">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorías
                    </a>
                    <ul className="dropdown-menu mt-4 bg-light rounded-0 border-0" aria-labelledby="navbarDropdown">
                        <li><NavLink className="dropdown-item" activeClassName="text-primary" to={"/category/1"}>Tablas 🏄</NavLink></li>
                        <li><NavLink className="dropdown-item" activeClassName="text-primary" to={"/category/2"}>Trajes 🩳</NavLink></li>
                        <li><NavLink className="dropdown-item" activeClassName="text-primary" to={"/category/3"}>Insumos 🤿</NavLink></li>
                        <li><NavLink className="dropdown-item" activeClassName="text-primary" to={"/category/4"}>Merchandising 🏊</NavLink></li>
                    </ul>
                </div>

                <CartWidget></CartWidget>
            </div>
        </nav>
    )
}

export default NavBar;