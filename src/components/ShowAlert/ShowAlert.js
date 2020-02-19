import React, { useState, useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import './ShowAlert.css'
import server from '../../shared/server'
import { Redirect } from 'react-router-dom'
import ActiveUserContext from '../../shared/activeUserContext'

// this function get two props and function 
//1. type - can get "error" or info and according to that select the icon and the color of the text 
//      pink for error and blue for info 
//2. p_text - the text the use want to be present on the window 
//3. The function "setTextError" is bollean and use for display or hide the window

const ShowAlert = (props) => {
    const { type, p_Text, handleClose } = props;
    const colorstyle = type === "error" ? { color: "#ffa1a1" } : { color: "rgb(37,183,211)" };
    const imgsrc = type === "error" ? "drawable-hdpi/noun_error_1156903.png" : "drawable-hdpi/icons8-info-39.png"
    return (
        <div className="c_showalert">
            <div>
                <div>
                    <img src={imgsrc} />
                </div>

                <p style={colorstyle}>{p_Text}</p>
            </div>
            <a onClick={handleClose}>&times;</a>

        </div>
    );

}
export default ShowAlert;