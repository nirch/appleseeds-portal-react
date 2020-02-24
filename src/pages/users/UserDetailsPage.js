import React, { useContext } from 'react';
import './users.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'
import PortalInput from '../../components/PortalInput'
import PortalTabView from '../../components/PortalTabView/PortalTabView';

const UserDetailsPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
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
            <div>
<<<<<<< HEAD
                <PortalInput inputTitle={'test'} inputValue={'input'}/>
=======
                <PortalTabView tabsObj={tabsObj} />

                {/* <PortalInput inputTitle={'test'} inputValue={'input'} ></PortalInput>
                <PortalInput inputTitle={'test'} inputValue={'input'} ></PortalInput>
                <PortalInput inputTitle={'test'} inputValue={'input'} ></PortalInput>
                <PortalInput inputTitle={'test'} inputValue={'input'} ></PortalInput>
                <PortalInput inputTitle={'test'} inputValue={'input'} ></PortalInput>
                <PortalInput inputTitle={'test'} inputValue={'input'} ></PortalInput>
                <PortalInput inputTitle={'test'} inputValue={'input'} ></PortalInput> */}
>>>>>>> 3404f15482bb965dc1e36110af2e9fb1626f1b17
            </div>
        </div>
    );
}

export default UserDetailsPage;