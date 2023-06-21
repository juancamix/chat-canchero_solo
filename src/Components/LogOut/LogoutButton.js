import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import './logout.css'


const LogoutButton = () => {
    const { logout
        // , isAuthenticated
     } = useAuth0();

    return (
        // isAuthenticated && (
<button className='boton1' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
        // )
    )
}

export default LogoutButton
