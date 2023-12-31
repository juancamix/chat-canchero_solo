import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import LogoutButton from '../LogOut/LogoutButton';
import './profile.css'


const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading){
        return <didv>loading information ...</didv>
    }

    return (
        isAuthenticated && (
            <article className='column'>
                <img className='foto' src={user.picture} alt={user.name}/>
                <h2 className='correo'>{user.name}</h2>
                <p>{user.email}</p>
                {/* <ul>
                    {Object.keys(user).map((objKey, i) => <li key={i}>{objKey}: {user[objKey]} </li>)}
                </ul> */}
                        <LogoutButton />
            </article>
        )
    )
}

export default Profile
