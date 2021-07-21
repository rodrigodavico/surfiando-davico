import { useContext } from 'react'
import SessionContext from '../../context/SessionContext'

const UserMenu = () => {
    const user = useContext(SessionContext).user
    const avatar = useContext(SessionContext).avatar
    const loginButton = useContext(SessionContext).loginButton
    const logoutButton = useContext(SessionContext).logoutButton

    return(
        <div className="position-relative" style={{ "height" : "90px"}}>
            <div className="container position-absolute top-0 end-0 m-2" style={{ "zIndex" : "50", "maxWidth" : "300px" }}>
                <div className="row p-2 bg-light align-items-center">
                    { user ? 
                        <>
                            <span className="col-6">{user.name}</span>
                            <img src={`${avatar}`} className="col-4 rounded-circle" style={{ "maxWidth" : "70px" }} alt="user-avatar"></img>
                            <button className="btn btn-outline-secondary rounded-0 col-2" type="button" data-bs-toggle="collapse" data-bs-target="#user_menu" aria-expanded="false" aria-controls="userControls">
                                <i className="bi-chevron-down"></i>
                            </button>
                            <div className="collapse row px-5" id="user_menu">
                                <div className="mt-2 pt-2"></div>{logoutButton}
                            </div>
                        </>
                        :
                        <>
                            <div className="col-12">
                                <span className="text-muted fw-light">Logueate en </span>
                                <span className="text-primary fw-normal">Surfiando App!</span>
                            </div>
                            <div className="col-12 px-4 py-2">{loginButton}</div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default UserMenu