import logo from '../../assets/images/surfiando-logo.png'

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
            <div className="container-fluid">
                <a className="navbar-brand ms-4" href="/home">
                    <img src={logo} alt="" width="30" height="30" class="d-inline-block align-text-top"></img>
                    <span className="ms-4">Surfiando App</span>
                </a>
                
                <ul className="navbar-nav d-none d-md-flex">
                    <li><a className="dropdown-item" href="/tablas">Tablas 🏄</a></li>
                    <li><a className="dropdown-item" href="/trajes">Trajes 🩳</a></li>
                    <li><a className="dropdown-item" href="/insumos">Insumos 🤿</a></li>
                    <li><a className="dropdown-item" href="/merchc">Merchandising 🏊</a></li>
                </ul>
                

                <div className="nav-item dropdown me-4 d-md-none">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorías
                    </a>
                    <ul className="dropdown-menu mt-4 bg-light rounded-0 border-0" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/tablas">Tablas 🏄</a></li>
                        <li><a className="dropdown-item" href="/trajes">Trajes 🩳</a></li>
                        <li><a className="dropdown-item" href="/insumos">Insumos 🤿</a></li>
                        <li><hr className="dropdown-divider"></hr></li>
                        <li><a className="dropdown-item" href="/merchc">Merchandising 🏊</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;