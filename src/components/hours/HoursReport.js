import React, {useState} from 'react';
import './HoursReport.css'
import './date.format'

const HoursReport = (props) => {
    // Declare a new state variable, which we'll call "count" const [count,
    // setCount] = useState(0);
    const {report} = props;
    // <p>You clicked {count}times</p> <button onClick={() => setCount(count + 1)}>
    //    Click me </button>

    function createDateObject(value) {
        try {
            return new Date(value.split('/').reverse().join('/'));
        }
        catch(e) {
            return null;
        }
    }


    const startHour = new Date("January 1 2000 " + report.starthour);
    const finishhour = new Date("January 1 2000 " + report.finishhour);
    const timeDiff = new Date(finishhour-startHour);
    const date = createDateObject(report.date);
    let row_class;
    switch(report.approval){
        case "-1": row_class="not-approved";
        break;
        case "0": row_class="waiting";
        break;
        case "1": row_class="approved";
        break;
    }

    let row_style = {
        margin : "5px",
        width : "100%"
    };

    return (
        <tr className={row_class} style={row_style} >
            <td>{date.format("dd.mm.yy")}</td>
            <td>{report.projectid}</td>
            <td>{report.actionid}</td>
            <td>{timeDiff.format("hh:MM")}</td> 
        </tr>
    );
}

export default HoursReport;