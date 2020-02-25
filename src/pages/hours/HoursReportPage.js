import React, { useContext, useState, useEffect } from "react";
import './hours.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import HoursReportTable from '../../components/hours/HoursReportTable'
import PortalDayMonthPickerComponent from '../../components/PortalDayMonthPickerComponent/PortalDayMonthPickerComponent'
import server from "../../shared/server";

const HoursReportPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    const [reports, setReports] = useState([]);
    const [perimeter, setPerimeter] = useState(null);
    const [showDate, setShowDate] = useState(new Date());
    const [totalMilliseconds, setTotalMilliseconds] = useState(0);

    const onShowDate=(aDate) => {
        setShowDate(aDate);
    }

    useEffect(() => {
        const fetchData = async () => {
          const requestData = {
          };
          server(activeUser, requestData, "GetMyReportingPerimeter").then(
            res => {
                console.log(res.data);
                setPerimeter(res.data);
               if (res.data.error) {
                alert("error in GetMyReportingPerimeter");
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
      }, []);

      useEffect(() => {
        const fetchData = async () => {
          const requestData = {
            month: showDate.getMonth()+1,
            year:  showDate.getFullYear()
          };
          server(activeUser, requestData, "GetReports").then(
            res => {
                //res.data.forEach(report=>{console.log(perimeter[report.projectid].projectName)});
                let timeCount = 0;
                res.data.forEach(report=>{
                    // add projectName & subject to report
                    const projectData = perimeter[report.projectid];
                    if(projectData===undefined) {
                      report.projectName = "NA";
                      report.subject = "NA";  
                    } else {
                      report.projectName = projectData.projectName;
                      const subjectData = projectData.subjects.find(subject=>subject.reportsubjectid==report.actionid);
                      report.subject = (subjectData===undefined)? "NA" : subjectData.subject;
                    }
                    // compute reported time from starthour and finishhour prperties
                    const startHour = new Date("January 1 2000 " + report.starthour);
                    const finishHour = new Date("January 1 2000 " + report.finishhour);
                    const timeMilliseconds = finishHour-startHour; // milliseconds
                    timeCount += timeMilliseconds;
                    // convert the reported time from milliseconds to "hh:mm" format
                    let hours = Math.floor(timeMilliseconds/1000/60/60);
                    let minutes = Math.floor((timeMilliseconds - hours*60*60*1000)/1000/60);
                    // add preceding zero if required to single digit hour/minute
                    hours = hours<10? '0'+hours : ''+hours;
                    minutes = minutes<10? '0'+minutes : ''+minutes;
                    report.totalTime = hours + ':' + minutes;
                });
                setTotalMilliseconds(timeCount);
                setReports(res.data);
              console.log(res.data);
              console.log(reports);

               if (res.data.error) {
                alert("error in GetReports");
              } else {
                // handleLogin(res.data);
              }
            },
            err => {
              console.error(err);
            }
          );
        };
        if (activeUser && perimeter!==null) {
          fetchData();
        }
      }, [showDate,perimeter]);


    // convert total hours from milliseconds to hours
    const totalHours = Math.floor(totalMilliseconds/1000/60/60);
    const totalHoursHeader = 'סה"כ שעות:  ' + totalHours;

    return (
        <div>
            <PortalNavbar handleLogout={handleLogout}/>
            <PortalDayMonthPickerComponent onShowDate={onShowDate}/>
            <div className="p-total-hours">{totalHoursHeader}</div>
            <HoursReportTable reports={reports}/>
        </div>
    );
}

export default HoursReportPage;