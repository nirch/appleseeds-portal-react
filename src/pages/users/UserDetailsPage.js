import React, { useState, useContext } from 'react';
import './users.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import PortalTabView from '../../components/PortalTabView/PortalTabView';
import UserProfile from "../../components/userComponents/UserProfile";
import { Redirect, useParams } from 'react-router-dom'
import PortalInput from '../../components/PortalInput'
import PortalHeaderView from '../../components/PortalHeaderView/PortalHeaderView';

const UserDetailsPage = (props) => {
    const { navbarTitle, navbarArrow, handleLogout, handleBack } = props;
    const activeUser = useContext(ActiveUserContext);
    const { id } = useParams();
    const [pageBack, setPageBack] = useState(false);

    if (!activeUser) {
        return <Redirect to='/' />
    }
    if (pageBack) {
        return <Redirect to='/users' />
    }

    const tabsObj = [{
        header: "פרופיל",
        view: <UserProfile user={id} />
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
            <PortalNavbar handleLogout={handleLogout} navbarTitle={"עובדים"} navbarArrow={true} handleBack={() => setPageBack(true)} />
            <PortalHeaderView userId={id} />
            <div>
                {/* <PortalInput inputTitle={'test'} inputValue={'input'} /> */}
                <PortalTabView tabsObj={tabsObj} />
            </div>
        </div>
    );
}

export default UserDetailsPage;