import { useContext } from 'react'
import SessionContext from '../../context/SessionContext'

const UserMenu = () => {
    const user = useContext(SessionContext).user
    const avatar = useContext(SessionContext).avatar
    console.log(avatar)
    return(
        <div className="position-relative">
            <div className="position-absolute top-0 end-0 m-2" style={{ "zIndex" : "50" }}>
                <div className="row p-2 bg-light align-items-center">
                    <span className="col-6">{user.name}</span>
                    <img src={`${avatar}`} className="col-4" alt="user-avatar"></img>
                    <button className="btn btn-outline-secondary rounded-0 col-2" type="button" data-bs-toggle="collapse" data-bs-target="#user_menu" aria-expanded="false" aria-controls="userControls">
                        <i className="bi-chevron-down"></i>
                    </button>
                    <div className="collapse" id="user_menu">
                        asdasd
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserMenu