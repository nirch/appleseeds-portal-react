import React, { useContext } from 'react';
import './users.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'

const UserDetailsPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    
    if (!activeUser) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <PortalNavbar handleLogout={handleLogout}/>
            <h1>פרטי משתמש</h1>
        </div>
    );
}

export default UserDetailsPage;