import { useAuth0 } from '@auth0/auth0-react';
import './login.css'
const LoginButton = () => {
    const { loginWithRedirect
        //  isAuthenticated 
        } = useAuth0();

    return (
        // !isAuthenticated && (
            <>
            <div className='contenedor'>
            <button className='boton' onClick={() => loginWithRedirect()}>
                Sign In
            </button>
            </div>
            </>
        // )
    )
}

export default LoginButton
