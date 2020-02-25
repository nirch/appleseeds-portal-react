import React, { useContext, useState, useEffect } from "react";
import './hours.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'
import HoursReportTable from '../../components/hours/HoursReportTable'
import jsonReports from './Reports.json';
import PortalDayMonthPickerComponent from '../../components/PortalDayMonthPickerComponent/PortalDayMonthPickerComponent'
import server from "../../shared/server";


const HoursReportPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    const [reports, setReports] = useState([]);
    const [perimeter, setPerimeter] = useState(null);
    const [showDate, setShowDate] = useState(new Date());

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
                res.data.forEach(report=>{
                    // add projectName to report
                    report.projectName=perimeter[report.projectid].projectName;
                    // add subject to report
                    report.subject = perimeter[report.projectid].subjects.find(subject=>subject.reportsubjectid==report.actionid).subject;
                });
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


    

    return (
        <div>
            <PortalNavbar handleLogout={handleLogout}/>
            <PortalDayMonthPickerComponent onShowDate={onShowDate}/>
            <HoursReportTable reports={reports}/>
        </div>
    );
}

export default HoursReportPage;