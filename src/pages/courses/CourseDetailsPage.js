import React, { useContext } from 'react';
import './courses.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect, useParams } from 'react-router-dom'
import PortalTabView from '../../components/PortalTabView/PortalTabView';
import CourseProfile from './Tabs/Profile/CourseProfile';

const CourseDetailsPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    const {id} = useParams();
    const tabsObj = [{
        header: "קורס",
        view: <CourseProfile courseId={id}/>
    },
    {
        header: "סילבוס",
        view: <p>I'm sylabus page</p>
    },
    {
        header: "סטודנטים",
        view: <p>I'm students page</p>
    },
    {
        header: "מדריכים",
        view: <p>I'm instructers page</p>
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