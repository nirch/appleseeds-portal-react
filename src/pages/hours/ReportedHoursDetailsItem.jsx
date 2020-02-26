import React from 'react';
import { useState } from 'react';
import "./ReportedHoursDetailsItem.css"
import { Checkbox } from 'react-bootstrap';

const ReportedHoursDetailsItem = (props) => {
    const [currentDate,setCurrentDate]=useState(new Date())
    const {reportedHoursObject} =  props;
    
    if (!reportedHoursObject)
    {
        return null;
    }
    let classType= "pending";
    if (reportedHoursObject)
    {
        if (reportedHoursObject.status==-1)
        {
            classType="rejected"
        }            
        else if (reportedHoursObject.status==1)
        {
            classType="approved"
        }

    }
  
    return (
        <div className="c-reported-hours-details-item">      
            <div className="radio-action" >
                <div>
                    <input type="radio" id={`approved-${reportedHoursObject.id}`} name={`radio-group${reportedHoursObject.id}`}  checked={classType==="approved"}/>
                    <label className="approved" for={`approved-${reportedHoursObject.id}`}>אשר<div className="radio approved"><span></span></div></label>
                </div>
                <div>
                    <input type="radio" id={`pending-${reportedHoursObject.id}`} name={`radio-group${reportedHoursObject.id}`} checked={classType==="pending"}/>
                    <label className="pending" for={`pending-   ${reportedHoursObject.id}`}>ממתין<div className="radio pending"><span></span></div></label>
                </div>
                <div >    
                    <input type="radio" id={`rejected-${reportedHoursObject.id}`} name={`radio-group${reportedHoursObject.id}`} checked={classType==="rejected"}/>
                    <label className="rejected" for={`rejected-${reportedHoursObject.id}`}>דחה<div className="radio rejected"><span></span></div></label>
                </div>
               
            </div>
            <div className={`data ${classType}`}>
            <div className="header-data">
                <div className="checkbox-div bold" >    
                    <input type="checkbox" id="select" />
                    <label for="select"> תאריך <span> 19/2/2020</span></label>
                    <label> סהכ שעות <span>9</span></label>   
                </div>
            </div>
            <div className="content-data">
                <div >    
                    <label >פרויקט</label>
                    <label className="bold">שם פרויקט</label>
                </div>
                <div >    
                    <label>מס/שם קורס</label>
                    <label className="bold">שם נושא פעילות המלא</label>
                </div>
                <div >    
                    <label>נושא פעילות</label>
                    <label className="bold">שם הקורס המלא</label>
                </div>
                
            </div>

            </div>

        </div>
    );
}

export default ReportedHoursDetailsItem;