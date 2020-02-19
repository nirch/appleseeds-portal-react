import React, { useContext } from 'react';
import './hours.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'
import HoursReportTable from '../../components/hours/HoursReportTable'
import jsonReports from './Reports.json';
import PortalDayMonthPickerComponent from '../../components/PortalDayMonthPickerComponent/PortalDayMonthPickerComponent'


const HoursReportPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    
    if (!activeUser) {
        return <Redirect to='/' />
    }

    let reports =jsonReports;

    return (
        <div>
            <PortalNavbar handleLogout={handleLogout}/>
            <PortalDayMonthPickerComponent/>
            <HoursReportTable reports={reports}/>
        </div>
    );
}

export default HoursReportPage;