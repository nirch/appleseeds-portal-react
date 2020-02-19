import React, { useContext } from 'react';

import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import PortalSearchPager from "../../components/search/PortalSearchPager";
import ReportedHoursDetailsItem from "./ReportedHoursDetailsItem";
import WorkerHoursReportingItem from "./WorkerHoursReportingItem";
import { Redirect } from 'react-router-dom'
import PortalDayMonthPickerComponent from '../../components/PortalDayMonthPickerComponent/PortalDayMonthPickerComponent';
import { Accordion,Card,Button } from 'react-bootstrap'
import './hoursApprovePage.css'

const HoursApprovePage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);

    if (!activeUser) {
        return <Redirect to='/' />
    }



    return (
        <div className="p-hours-approve-page">
            <PortalNavbar  handleLogout={handleLogout}/>
            <PortalDayMonthPickerComponent className="month-picker" date={new Date('1/1/1960')}></PortalDayMonthPickerComponent>
            <PortalSearchPager  placeholder={"חיפוש עובד"}></PortalSearchPager>
            <Accordion>
                <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <WorkerHoursReportingItem ></WorkerHoursReportingItem>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    <WorkerHoursReportingItem ></WorkerHoursReportingItem>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
                        
        </div>
    );
}

export default HoursApprovePage;