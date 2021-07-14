import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import SessionContext from '../../context/SessionContext'

const Logout = () => {
    const user = useContext(SessionContext).user
    const logoutButton = useContext(SessionContext).logoutButton

    let history = useHistory()

    function goHome() {
        history.push('/')
    }

    return (
        <div className="container text-center p-4">
        {user ?
            <>
                <h3>Awwww, esperamos que vuelvas pronto!</h3>
                <span className="fw-lighter text-primary">Por favor presione el botón para cerrar su session</span>
                <div className="py-5">
                    {logoutButton}
                </div>
            </>
            :
            <>
                <h3>Awwww, esperamos que vuelvas pronto!</h3>
                <div className="py-5">
                    <button className="btn btn-primary rounded-0" onClick={() => goHome()}>Volver al home</button>
                </div>
            </>
        }
        </div>
    )
}

export default Logout