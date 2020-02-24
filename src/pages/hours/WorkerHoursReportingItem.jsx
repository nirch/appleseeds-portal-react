import React from 'react';
import { useState } from 'react';
import './WorkerHoursReportingItem.css'

const WorkerHoursReportingItem = (props) => {

    const {workerDetails} =  props;


    return (
        <div className="c-worker-hours-reporting-item">
            <div className="worker-name" >{workerDetails.name}</div>
            <div className="worker-params">
                <div  className="d-inline-block hours-pending">{workerDetails.pendingHours}</div>
                <div className="d-inline-block hours-approved">{workerDetails.approvedHours}</div>              
                <div className="d-inline-block hours-rejected">{workerDetails.rejectedHours}</div>
                <div className="d-inline-block hours-total">{workerDetails.totalHours}</div>
                <div className="d-inline-block">
                    <img className="open" src="images/arrow-down.png" alt="open"></img>
                </div>
            </div>
        </div>
    );
}

export default WorkerHoursReportingItem;