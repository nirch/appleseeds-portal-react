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
import server from "../../shared/server";

const HoursApprovePage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    const [currentWorker,setCurrentWorker]=useState(null);
    const [reports, setReports] = useState([]);   // data of the current selected user
    const [allWorkers,setAllWorkers]=useState([]);
    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [workersSearchString, setWorkersSearchString] = useState("");
    const [currentShownDate,setCurrentShownDate]=useState(new Date());
    
    
    const onShowDate=(aDate) => {
        setCurrentShownDate(aDate);
    }

   
    useEffect(() => {     
        if (currentWorker) {
             /// get the reports for this user from db
             setReports(setReportsData(currentWorker));
        } else {
            setReports([]);
        }

    }, [currentWorker])

    useEffect(() => {      
        // call database to change data
        const workersArray=[];
        const fetchData = async () => {
            console.log(currentShownDate.getMonth(),currentShownDate.getFullYear() );
            const requestData = {
                month: currentShownDate.getMonth()+1,
                year:  currentShownDate.getFullYear()
            };
            server(activeUser, requestData, "GetAllReporters").then(
              res => {

                    let pendingHours=0;
                    let rejectedHours=0;
                    let approvedHours=0;
                    let totalHours=180;
                    res.data.forEach(item=>
                    {
                        if (item.reports.length>0){
                            pendingHours=100;
                            rejectedHours=30;
                            approvedHours=50;
                            totalHours=180;                         
                        }
                        else{
                            pendingHours=0;
                            rejectedHours=0;
                            approvedHours=0;
                            totalHours=0;
                        }
                                           
                        let obj=
                        {
                            id:item.userid,
                            name: item.firstname+" "+ item.lastname,
                            status:item.status,
                            pendingHours: pendingHours,
                            rejectedHours:rejectedHours,
                            approvedHours:approvedHours,
                            totalHours:totalHours,
                            reports:item.reports
                        }
                        workersArray.push(obj);
                    });
                    setAllWorkers(workersArray);
                 if (res.data.error) {
                    alert("error in GetAllReporters");               
                } else {
                  // handleLogin(res.data);
                }
              },
              err => {
                console.error(err);
              }
            );
          };
          if (activeUser) {
            fetchData();
          }

    }, [currentShownDate])




    if (!activeUser) {
        return <Redirect to='/' />
    }


    
    const setReportsData=(currentWorker)=>
    {
        let reportedHoursArray=[];

        //currentWorker holds the id,
        // find the worker    
        
        let worker=allWorkers.find(element => element.id=== currentWorker);
        if (worker.reports &&worker.reports.length>0 ) 
        {  
            worker.reports.forEach(item=>{
                const reportedHoursObject= {
                    id:item.reportid,
                    status: parseInt(item.approval),
                    date:item.date,
                    noOfHours:item.finishhour-item.starthour,
                    projectName:item.projectid,
                    courseName:item.courseid,
                    activitySubject: item.actionid
                }
                reportedHoursArray.push(reportedHoursObject);

            })
        }

      
        return reportedHoursArray;
    }

    const handleSearch = searchInput => {
        setCurrentPage(0);
        setWorkersSearchString(searchInput);
      };

      const pageChange = newCurrentPage => {
        setCurrentPage(newCurrentPage);
      };

    const handleAccordionClick=(event)=>{
        setCurrentWorker(event) ;  // current worker id is set
      }
  

      const changeStatus = (reportId, newStatus) => {
        const reportsCopy = [...reports];
        const report = reportsCopy.find(currReport => currReport.id === reportId);
        report.status = newStatus;
        setReports(reportsCopy);
      }

    let accordionBody=reports.map(item=>{
        return(
            <ReportedHoursDetailsItem reportedHoursObject={item} changeStatus={changeStatus}></ReportedHoursDetailsItem>
        )
    });

    const accordionItems=allWorkers.map(item=>{
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
            <PortalDayMonthPickerComponent className="month-picker" date={new Date()} onShowDate={onShowDate}></PortalDayMonthPickerComponent>
            <PortalSearchPager  
                placeholder={"חיפוש עובד"}
                pages={pages}
                currentPage={currentPage}
                handleSearch={handleSearch}
                pageChange={pageChange}>
            </PortalSearchPager>
            <Accordion>
                {accordionItems}
            </Accordion>
                        
        </div>
    );
}

export default HoursApprovePage;