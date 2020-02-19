import React from 'react';
import { Form, Button} from 'react-bootstrap'
import { useState } from 'react';
import "./ReportedHoursDetailsItem.css"

const ReportedHoursDetailsItem = (props) => {
    
    return (
        <div className="c-reported-hours-details-item">      
            <div className="radio-action">
                <div>
                    <input type="radio" id="test3" name="radio-group"/>
                    <label className="approved" for="test3">אשר<div className="radio approved"><span></span></div></label>
                </div>
                <div>
                    <input type="radio" id="test2" name="radio-group"/>
                    <label className="pending" for="test2">ממתין<div className="radio pending"><span></span></div></label>
                </div>
                <div >    
                    <input type="radio" id="test1" name="radio-group"/>
                    <label className="rejected" for="test1">דחה<div className="radio rejected"><span></span></div></label>
                </div>
               
            </div>
            <div className="data"></div>

        </div>
    );
}

export default ReportedHoursDetailsItem;