import React, { useContext } from 'react';
import './courses.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'
import PortalTabView from '../../components/PortalTabView/PortalTabView';

const CourseDetailsPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    const tabsObj = [{
        header: "קורס",
        view: <p>I'm profile page</p>
    },
    {
        header: "סילבוס",
        view: <p>I'm courses page</p>
    },
    {
        header: "סטודנטים",
        view: <p>I'm employees page</p>
    },
    {
        header: "מדריכים",
        view: <p>I'm report page</p>
    }];



    if (!activeUser) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <PortalNavbar handleLogout={handleLogout} />
            {/*<h1>פרטי קורס</h1>*/}
            <PortalTabView tabsObj={tabsObj} />
        </div>
    );
}

export default CourseDetailsPage;