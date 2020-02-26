import React, {useState} from 'react';
import './HoursReportTable.css'
import HoursReport from './HoursReport';


const HoursReportTable = (props) => {
    const { reports } = props;

    let noReportsLabel = "";
    let jsxReports=[];
    if(reports!==null && reports!==undefined) {
        reports.forEach(report => {
            jsxReports.push(<HoursReport report={report}/>);
        });
    }
    if(jsxReports.length===0) {
        noReportsLabel = "אין דיווחים"        
    }

    return (
        <div>
            <table className="c-hours-report-table">
                <thead>
                    <tr>
                        <th>תאריך</th>
                        <th>פרויקט</th>
                        <th>נושא פעילות</th>
                        <th>סה"כ שעות</th>                        
                    </tr>
                </thead>
                <tbody>
                    {jsxReports}
                </tbody>
            </table>
            <div className="c-no-report-msg">{noReportsLabel}</div>
        </div>
    );
}

export default HoursReportTable;