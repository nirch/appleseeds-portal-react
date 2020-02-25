import React, {useState} from 'react';
import './HoursReportTable.css'
import HoursReport from './HoursReport';


const HoursReportTable = (props) => {
    const { reports } = props;

    let jsxReports=[];
    if(reports!==null && reports!==undefined) {
        reports.forEach(report => {
            jsxReports.push(<HoursReport report={report}/>);
        });
    }

    return (
        <div>
            <h1>דיווח שעות</h1>
            <table className="hours-report-table">
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
        </div>
    );
}

export default HoursReportTable;