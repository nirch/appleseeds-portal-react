import React, { useContext } from 'react';
import './users.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'
import PortalTabView from '../../components/PortalTabView/PortalTabView';
import UserProfile from "../../components/userComponents/UserProfile";

const UserDetailsPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    if (!activeUser) {
        return <Redirect to='/' />
    }
    // const userid = props.history.location.state.userid;
    const tabsObj = [{
        header: "פרופיל",
        view: <UserProfile user={props.history.location.pathname.split('/').pop()}/>
    },
    {
        header: "קורסים",
        view: <p>I'm courses page</p>
    },
    {
        header: "עובדים",
        view: <p>I'm employees page</p>
    },
    {
        header: "דיווח",
        view: <p>I'm report page</p>
    }];

    return (
        <div>
            <PortalNavbar handleLogout={handleLogout} />
            <div>
                <PortalTabView tabsObj={tabsObj} />
            </div>
        </div>
    );
}

export default UserDetailsPage;