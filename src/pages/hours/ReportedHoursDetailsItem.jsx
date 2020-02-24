import React from 'react';
import { useState } from 'react';
import "./ReportedHoursDetailsItem.css"
import { Checkbox } from 'react-bootstrap';

const ReportedHoursDetailsItem = (props) => {


    const [currentDate,setCurrentDate]=useState(new Date())
    
  



    return (
        <div className="c-reported-hours-details-item">      
            <div className="radio-action">
                <div>
                    <input type="radio" id="approved" name="radio-group"/>
                    <label className="approved" for="approved">אשר<div className="radio approved"><span></span></div></label>
                </div>
                <div>
                    <input type="radio" id="pending" name="radio-group"/>
                    <label className="pending" for="pending">ממתין<div className="radio pending"><span></span></div></label>
                </div>
                <div >    
                    <input type="radio" id="rejected" name="radio-group"/>
                    <label className="rejected" for="rejected">דחה<div className="radio rejected"><span></span></div></label>
                </div>
               
            </div>
            <div className="data approved">
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