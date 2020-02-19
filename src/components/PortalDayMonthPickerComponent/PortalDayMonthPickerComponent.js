import React from 'react';
import { ButtonGroup } from 'react-bootstrap'
import { useState } from 'react';
import './PortalDayMonthPickerComponent.css'



// gets two optional props:
//date- the date to initialyy display, if not passed, show the current day
//type- the selector type :"day" or "month", default is "month"
const PortalDayMonthPickerComponent = (props) => {
    
    const initialDate = props.date ? props.date : new Date();
    const displayType=props.type?props.type:"month";
    const [theDateToShow,setTheDateToShow]=useState(initialDate)
    const months= ["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר","דצמבר"]

    // format of the date that will be shown on screen
    const showText=(aDate)=>
    {
        if (displayType==="day")
        { 
           return aDate.toLocaleDateString('en-GB') ;
        }
        else{
            return months[aDate.getMonth()] +" "+aDate.getFullYear() ;
        }
        
    }

    const addMonth=()=>
    {
        var currentMonth=theDateToShow.getMonth();
        var currentYear=theDateToShow.getFullYear();
        var newDate = new Date(theDateToShow.getTime());
        if (currentMonth<11)  // from 0-11
        {
            newDate.setMonth(currentMonth+1);
        }
        else{
            newDate.setFullYear(currentYear+1);
            newDate.setMonth(0);
        }
        setTheDateToShow(newDate);
   }

    const removeMonth=()=>
    {
        var currentMonth=theDateToShow.getMonth();
        var currentYear=theDateToShow.getFullYear();
        var newDate=new Date(theDateToShow.getTime());;

        if (currentMonth>0) // from 0-11
        {
            newDate.setMonth(currentMonth-1);
        }
        else{
            newDate.setFullYear(currentYear-1);
            newDate.setMonth(11);
        }
        setTheDateToShow(newDate);

    }
    const addDay=()=>
    {
        var newDate = new Date(theDateToShow.getTime());
        newDate.setDate(newDate.getDate() + 1);
        setTheDateToShow(newDate);

    }
    const removeDay=()=>
    {
        var newDate = new Date(theDateToShow.getTime());
        newDate.setDate(newDate.getDate() - 1);
        setTheDateToShow(newDate);
        
    }


    const handleMinusClick=()=>
    {
        if (displayType==="day")
        {
            removeDay(); 
        }
        else{
            removeMonth();
        }
             
    }


    const handlePlusClick=()=>
    {
        if (displayType==="day")
        {
            addDay();
        }
        else{
            addMonth();
        }

    }


    return (
        <div className="c-day-month-picker">
        <ButtonGroup aria-label="Basic example">
            <div onClick={() =>handleMinusClick() } >
                <img src="images/arrow-right.png" alt="-" ></img>
            </div>
            <div className="date-text" >{showText(theDateToShow)}</div>
            <div  onClick={() => { handlePlusClick() }}>
                <img src="images/arrow-left.png" alt="+"></img>
            </div>
        </ButtonGroup>
        </div>
    );
}

export default PortalDayMonthPickerComponent;