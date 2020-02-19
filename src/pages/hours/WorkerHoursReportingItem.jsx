import React from 'react';
import { ButtonGroup } from 'react-bootstrap'
import { useState } from 'react';
import './WorkerHoursReportingItem.css'

const WorkerHoursReportingItem = (props) => {

    const [pendingHours,setPendingHours]=useState(0);
    const [approvedHours,setApprovedHours]=useState(0);
    const [rejectedHours,setRejectedHours]=useState(0);
    const [totalHours,setTotalHours]=useState(0);

    return (
        <div className="c-worker-hours-reporting-item">
            <div className="worker-name" >שם עובד</div>
            <div className="worker-params">
                <div className="d-inline-block hours-total">150</div>
                <div className="d-inline-block hours-rejected">50</div>
                <div className="d-inline-block hours-approved">50</div>
                <div  className="d-inline-block hours-pending">50</div>              
                <div className="d-inline-block">
                    <img className="open" src="images/arrow-down.png" alt="open"></img>
                </div>
            </div>
        </div>
    );
}

export default WorkerHoursReportingItem;