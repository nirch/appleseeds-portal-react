import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import PortalSearchPager from "../../components/search/PortalSearchPager";
import ReportedHoursDetailsItem from "./ReportedHoursDetailsItem";
import WorkerHoursReportingItem from "./WorkerHoursReportingItem";
import { Redirect } from 'react-router-dom'
import PortalDayMonthPickerComponent from '../../components/PortalDayMonthPickerComponent/PortalDayMonthPickerComponent';
import { Accordion,Card } from 'react-bootstrap'
import './hoursApprovePage.css'

const HoursApprovePage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    const [currentWorker,setCurrentWorker]=useState(null);
    const [reports, setReports] = useState([]);
    
    useEffect(() => {     
        if (currentWorker) {
             /// get the reports for this user from db
             setReports(setReportsData(currentWorker));
        } else {
            setReports([]);
        }

    }, [currentWorker])

    if (!activeUser) {
        return <Redirect to='/' />
    }

    /*********************************** */
    // replace this section with db
    // to be initialized with data from db
    //worker details
    const worker1= {
        id: 101,
        name:"עובד 1",
        pendingHours:50,
        rejectedHours:50,
        approvedHours:50,
        totalHours:150,
    }
    const worker2= {
        id: 102,
        name:"עובד 2",
        pendingHours:10,
        rejectedHours:30,
        approvedHours:130,
        totalHours:170,
    }

    const workersArray=[];
    workersArray.push(worker1);
    workersArray.push(worker2);
      // end of replace data
    /*********************************** */
   
    const setReportsData=(currentWorker)=>
    {
        let reportedHoursArray=[];

            /*********************************** */
            // replace this section with db
            // to be initialized with data from db
        switch(currentWorker)
        {
            case 101:
                {
                    const reportedHoursObject1= {
                        id:1,
                        status: 1,
                        date:new Date(),
                        noOfHours:25,
                        projectName:"שם הפרויקט הנוכחי",
                        courseName:"שם קורס נוכחי",
                        activitySubject: "נושא פעילות"
                    }
                    const reportedHoursObject2= {
                        id:2,
                        status: 0,
                        date:new Date(),
                        noOfHours:10,
                        projectName:"שם הפרויקט הנוכחי",
                        courseName:"שם קורס נוכחי",
                        activitySubject: "נושא פעילות"
                    }
                    const reportedHoursObject3= {
                        id:3,
                        status: -1,
                        date:new Date(),
                        noOfHours:10,
                        projectName:"שם הפרויקט הנוכחי",
                        courseName:"שם קורס נוכחי",
                        activitySubject: "נושא פעילות"
                    }
                    reportedHoursArray.push(reportedHoursObject1);
                    reportedHoursArray.push(reportedHoursObject2);
                    reportedHoursArray.push(reportedHoursObject3);
                    break;

                }
                case 102:
                {
                    const reportedHoursObject4= {
                        id:4,
                        status: -1,
                        date:new Date(),
                        noOfHours:10,
                        projectName:"שם הפרויקט הנוכחי",
                        courseName:"שם קורס נוכחי",
                        activitySubject: "נושא פעילות"
                    }
                    reportedHoursArray.push(reportedHoursObject4);
                    break;
                }

                // end of replace data
            /*********************************** */
            
        }
        return reportedHoursArray;
    }

    const handleAccordionClick=(event)=>{
        console.log(event);
        setCurrentWorker(event) ;  // current worker id is set
      }
  


    let accordionBody=reports.map(item=>{
        return(
            <ReportedHoursDetailsItem reportedHoursObject={item}></ReportedHoursDetailsItem>
        )
    });

    const accordionItems=workersArray.map(item=>{
        return (
            <Card>
            <Accordion.Toggle as={Card.Header} eventKey={item.id} onClick={()=>handleAccordionClick(item.id)}>
                <WorkerHoursReportingItem workerDetails={item} ></WorkerHoursReportingItem>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={item.id}>
                <Card.Body>
                   {item.id === currentWorker ? accordionBody :null}
                </Card.Body>
                </Accordion.Collapse>
            </Card>

        )
    })


    return (
        <div className="p-hours-approve-page">
            <PortalNavbar  handleLogout={handleLogout}/>
            <PortalDayMonthPickerComponent className="month-picker" date={new Date('1/1/1960')}></PortalDayMonthPickerComponent>
            <PortalSearchPager  placeholder={"חיפוש עובד"}></PortalSearchPager>
            <Accordion>
                {accordionItems}
            </Accordion>
                        
        </div>
    );
}

export default HoursApprovePage;