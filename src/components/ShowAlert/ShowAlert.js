import React, { useState, useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import './ShowAlert.css'
import server from '../../shared/server'
import { Redirect } from 'react-router-dom'
import ActiveUserContext from '../../shared/activeUserContext'


const ShowAlert = (props) => {
    const { type, p_Text, setTextError } = props;
    const colorstyle = type === "error" ? { color: "#ffa1a1" } : { color: "blue" };
    const imgsrc = type === "error" ? "drawable-hdpi/noun_error_1156903.png" : null
    return (
        <div className="c_showalert">
            <div>
                <div>
                    <img src={imgsrc} width="39px" />
                </div>

                <p style={colorstyle}>{p_Text}</p>
            </div>
            <a onClick={() => setTextError("")}>&times;</a>

        </div>
    );

}
export default ShowAlert;