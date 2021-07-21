import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import SessionContext from '../../context/SessionContext'

const Login = () => {
    const user = useContext(SessionContext).user
    const loginButton = useContext(SessionContext).loginButton

    let history = useHistory()

    function goCart() {
        history.push('/cart')
    }

    return (
        <div className="container text-center p-4">
        {!user ?
            <>
                <h3>Bienvenido a Surfiando App</h3>
                <span className="fw-lighter text-primary">Por favor logueese en nuestra app con google</span>
                <div className="py-5">
                    {loginButton}
                </div>
            </>
            :
            <>
                <h3>Hola {user.name}!</h3>
                <span className="fw-lighter text-primary">Ya estás logueado en nuestro sitio, a surfiar!</span>
                <div className="py-5">
                    <button className="btn btn-primary rounded-0" onClick={() => goCart()}>Ir a Carrito</button>
                </div>
            </>
        }
        </div>
    )
}

export default Login