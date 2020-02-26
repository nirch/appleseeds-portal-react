import React, { useContext } from 'react';
import './users.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect, useParams } from 'react-router-dom'
import PortalInput from '../../components/PortalInput'
import PortalTabView from '../../components/PortalTabView/PortalTabView';
import PortalHeaderView from '../../components/PortalHeaderView/PortalHeaderView';

const UserDetailsPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    const { id } = useParams();

    if (!activeUser) {
        return <Redirect to='/' />
    }

    // const userid = props.history.location.state.userid;
    const tabsObj = [{
        header: "פרופיל",
        view: <p>I'm profile page</p>
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
            {/* <h1>עובדים</h1> */}
            {/* <div>{userid}</div> */}
            <PortalHeaderView userId={id} />
            <div>
                <PortalInput inputTitle={'test'} inputValue={'input'} />
                <PortalTabView tabsObj={tabsObj} />
            </div>
        </div>
    );
}

export default UserDetailsPage;