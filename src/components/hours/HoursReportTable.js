import React, {useState} from 'react';
import './HoursReportTable.css'
import HoursReport from './HoursReport';


const HoursReportTable = (props) => {
    // Declare a new state variable, which we'll call "count"
    // const [count, setCount] = useState(0);
    // const [reports, setReports] = useState(props.reports);
    const { reports } = props;
    
    // <p>You clicked {count}times</p>
    // <button onClick={() => setCount(count + 1)}>
    //     Click me
    // </button>

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