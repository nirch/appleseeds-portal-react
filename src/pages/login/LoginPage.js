import React, { useState, useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import './login.css'
import server from '../../shared/server'
import { Redirect } from 'react-router-dom'
import ActiveUserContext from '../../shared/activeUserContext'
import ShowAlert from '../../components/ShowAlert/ShowAlert'

const LoginPage = (props) => {
    const { handleLogin } = props;
    const [email, setEmail] = useState("");
    const [textError, setTextError] = useState("");
    const [pwd, setPwd] = useState("");
    const activeUser = useContext(ActiveUserContext);
    var type = "error";


    const login = () => {

        if (!email || !pwd) {

            setTextError("נא להזין שם משתמש וסיסמה");
            // alert("נא להזין פרטי משתמש");
            return;
        }


        const data = { email, pass: pwd };
        server(null, data, "login").then(res => {
            console.log(res);
            if (res.data.error) {

                setTextError("אימייל או סיסמה שגויים");



                //alert("error in login");
            } else {
                handleLogin(res.data);
            }
        }, err => {
            console.error(err);
        })
    }
    const setEmailCleanError = (e) => {
        setEmail(e.target.value);
        if (textError != "") {
            setTextError("")
        }

    }
    const setPassCleanError = (e) => {
        setPwd(e.target.value);
        if (textError != "") {
            setTextError("")
        }

    }
    if (activeUser) {
        return <Redirect to='/courses' />
    }
    const showerror = textError === "" ? "errorlogin errorhide" : "errorlogin";

    return (



        <Container className="p-login">
            <img src="drawable-hdpi/01.png" />

            <div className="loginbutton">

                <input value={email} type="email" placeholder="אימייל" onChange={e => setEmailCleanError(e)} />
            </div>
            <div className="loginbutton">

                <input value={pwd} placeholder="סיסמא" type="password" placeholder="סיסמה" onChange={e => setPassCleanError(e)} >
                </input>
            </div>
            <div className="loginbutton">
                <button type="button" onClick={login}>התחברות</button>


            </div>
            <div className={showerror}>
                <ShowAlert type={type} p_Text={textError} setTextError={setTextError} />
            </div>

            {/*
            
                <img src="drawable-hdpi/noun_error_1156903.png" width="39px" />
                <p>סיסמה שגויה</p>
                <a onClick={() => setTextError(false)}>X</a>
            </div>
    */}
            {/*} <div className="text-center">
                <a>שכחתי סיסמה</a>
    </div> */}


        </Container >
    );
}

export default LoginPage;