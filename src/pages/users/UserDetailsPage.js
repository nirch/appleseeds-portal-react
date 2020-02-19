import React, { useContext } from 'react';
import './users.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'
import PortalInput from '../../components/PortalInput'

const UserDetailsPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    if (!activeUser) {
        return <Redirect to='/' />
    }
    const userid = props.history.location.state.userid;

    return (
        <div>
            <PortalNavbar handleLogout={handleLogout}/>
            <h1>פרטי משתמש</h1>
            <div>{userid}</div>
            <div>
                <PortalInput inputTitle={'test'} inputValue={'input'} ></PortalInput>
                <PortalInput inputTitle={'test'} inputValue={'input'} ></PortalInput>
                <PortalInput inputTitle={'test'} inputValue={'input'} ></PortalInput>
                <PortalInput inputTitle={'test'} inputValue={'input'} ></PortalInput>
                <PortalInput inputTitle={'test'} inputValue={'input'} ></PortalInput>
                <PortalInput inputTitle={'test'} inputValue={'input'} ></PortalInput>
                <PortalInput inputTitle={'test'} inputValue={'input'} ></PortalInput>
            </div>
        </div>
    );
}

export default UserDetailsPage;