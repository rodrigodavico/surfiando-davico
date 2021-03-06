import { useState } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

import SessionContext from './SessionContext'

const SessionProvider = ({ defaultValue = false, children }) => {
    const [user, setUser] = useState(defaultValue)
    const [avatar, setAvatar] = useState(defaultValue)

    const loginButton = 
        <GoogleLogin
            clientId="171541500541-98ec1m8rus2p5cmqjf3lu9j5l9i5vfkn.apps.googleusercontent.com"
            buttonText="Ingresar con Google"
            onSuccess={login}
            onFailure={failed}
            cookiePolicy={'single_host_origin'}
        />

    const logoutButton =
        <GoogleLogout
            clientId="171541500541-98ec1m8rus2p5cmqjf3lu9j5l9i5vfkn.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
            isSignedIn={true}
        />

    function login(res) {
        let user = false
        let avatar = false
        if(res.profileObj) {
            user = {
                id: res.profileObj.googleId,
                name: res.profileObj.name,
                email: res.profileObj.email,
            }
            avatar = res.profileObj.imageUrl
        }
        setUser(user)
        setAvatar(avatar)
    }

    function logout() {
        setUser(false)
    }

    function failed() {
        console.log('Failed login user!')
        setUser(false)
    }

    return(
        <SessionContext.Provider value={{user, avatar, loginButton, logoutButton}}>
            {children}
        </SessionContext.Provider>
    )
}

export default SessionProvider