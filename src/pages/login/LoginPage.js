import React, { useState, useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import './login.css'
import server from '../../shared/server'
import { Redirect } from 'react-router-dom'
import ActiveUserContext from '../../shared/activeUserContext'


const LoginPage = (props) => {
    const { handleLogin } = props;
    const [email, setEmail] = useState("");
    const [showerror, setShowErr] = useState("errorlogin errorhide");
    const [pwd, setPwd] = useState("");
    const activeUser = useContext(ActiveUserContext);

    const login = () => {

        if (!email || !pwd) {
            setShowErr("errorlogin");
            // alert("נא להזין פרטי משתמש");
            return;
        }

        const data = { email, pass: pwd };
        server(null, data, "login").then(res => {
            console.log(res);
            if (res.data.error) {
                setShowErr("errorlogin");
                //alert("error in login");
            } else {
                handleLogin(res.data);
            }
        }, err => {
            console.error(err);
        })
    }

    if (activeUser) {
        return <Redirect to='/courses' />
    }

    return (



        <Container className="p-login">
            <img src="drawable-hdpi/01.png" />

            <div className="loginbutton">

                <input value={email} type="email" placeholder="אימייל" onChange={e => setEmail(e.target.value)} >
                </input>
            </div>
            <div className="loginbutton">

                <input value={pwd} placeholder="סיסמא" type="password" placeholder="סיסמא" onChange={e => setPwd(e.target.value)} >
                </input>
            </div>
            <div className="loginbutton">
                <button type="button" onClick={login}>התחברות</button>


            </div>
            <div className={showerror}>
                <img src="drawable-hdpi/noun_error_1156903.png" width="39px" />
                <p>סיסמה שגויה</p>
                <a onClick={() => setShowErr("errorlogin errorhide")}>X</a>
            </div>


        </Container >
    );
}

export default LoginPage;