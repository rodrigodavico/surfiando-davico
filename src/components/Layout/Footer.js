import { NavLink } from 'react-router-dom'

const Footer = (props) => {
    return(
        <footer className="footer mt-auto bg-dark p-2">
            <div className="row m-0">
                <div className="col col-md-6 text-center">
                    <span className="text-muted">© Surfiando App 🏄🏄 - All rights reserved - 2021</span>
                </div>
                <div className="col col-md-6 text-center">
                    <NavLink className="text-decoration-none" activeClassName="text-primary" to={"/tyc"}>Términos y Condiciones</NavLink>
                </div>
            </div>
        </footer>
    )
}

export default Footer;