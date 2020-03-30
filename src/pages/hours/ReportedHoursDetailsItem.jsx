import React from 'react';
import { useState } from 'react';
import "./ReportedHoursDetailsItem.css"
import { Checkbox } from 'react-bootstrap';

const ReportedHoursDetailsItem = (props) => {
    const {reportedHoursObject, changeStatus} =  props;
    if (!reportedHoursObject)
    {
        return null;
    }

    const returnClassType= (reportedHoursObject)=>
    {
        if(!reportedHoursObject) 
            return "pending";
        switch (reportedHoursObject.status)
        {
            case -1:
                return "rejected";
                break;
            case 1:
                return "approved";
                break;
            case 0:
                return "pending";
                break;

        }
 
  

    }
    let classType= "pending";

    return (
        <div className="c-reported-hours-details-item">      
            <div className="radio-action" >
                <div>
                    <input type="radio" id={`approved-${reportedHoursObject.id}`} name={`radio-group${reportedHoursObject.id}`}  checked={returnClassType(reportedHoursObject)==="approved"} />
                    <label className="approved" for={`approved-${reportedHoursObject.id}`}>אשר<div className="radio approved" onClick={() => changeStatus(reportedHoursObject.id, 1)}><span></span></div></label>
                </div>
                <div>
                    <input type="radio" id={`pending-${reportedHoursObject.id}`} name={`radio-group${reportedHoursObject.id}`} checked={returnClassType(reportedHoursObject)==="pending"} />  
                    <label className="pending" for={`pending-   ${reportedHoursObject.id}`}>ממתין<div className="radio pending" onClick={() => changeStatus(reportedHoursObject.id, 0)}><span></span></div></label>
                </div>
                <div >    
                    <input type="radio" id={`rejected-${reportedHoursObject.id}`} name={`radio-group${reportedHoursObject.id}`} checked={returnClassType(reportedHoursObject)==="rejected"} />
                    <label className="rejected" for={`rejected-${reportedHoursObject.id}`}>דחה<div className="radio rejected" onClick={() => changeStatus(reportedHoursObject.id, -1)}><span></span></div></label>
                </div>
               
            </div>
            <div className={`data ${returnClassType(reportedHoursObject)}`}>
            <div className="header-data">
                <div className="checkbox-div bold" >    
                    <input type="checkbox" id="select" />
                    <label for="select"> תאריך <span> 19/2/2020</span></label>
                    <label> סהכ שעות <span>9</span></label>   
                </div>
            </div>
            <div className="content-data">
                <div className="content-item" >    
                    <label >פרויקט</label>
                    <label className="bold">{reportedHoursObject.projectName}</label>
                </div>
                <div className="content-item">    
                    <label>מס/שם קורס</label>
                    <label className="bold">{reportedHoursObject.courseName}</label>
                </div>
                <div className="content-item">    
                    <label>נושא פעילות</label>
                    <label className="bold">{reportedHoursObject.activitySubject}</label>
                </div>
                
            </div>

            </div>

        </div>
    );
}

export default ReportedHoursDetailsItem;