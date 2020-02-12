import React, { useState, useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import './login.css'
import server from '../../shared/server'
import { Redirect } from 'react-router-dom'
import ActiveUserContext from '../../shared/activeUserContext'


const LoginPage = (props) => {
    const { handleLogin } = props;
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const activeUser = useContext(ActiveUserContext);

    const login = () => {

        if (!email || !pwd) {
            alert("נא להזין פרטי משתמש");
            return;
        }

        const data = { email, pass: pwd };
        server(null, data, "login").then(res => {
            console.log(res);
            if (res.data.error) {
                alert("error in login");
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

                <input value={email} placeholder="סיסמא" type="password" placeholder="סיסמא" onChange={e => setEmail(e.target.value)} >
                </input>
            </div>
            <div className="loginbutton">
                <button type="button" onClick={login}>התחברות</button>


            </div>

            {/* <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control value={email} type="email" placeholder="אימייל" onChange={e => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label></Form.Label>
                    <Form.Control value={pwd} type="password" placeholder="סיסמה" onChange={e => setPwd(e.target.value)} />
                </Form.Group>
 <input value={email} placeholder="כניסה" type="email" placeholder="אימייל" onChange={e => setEmail(e.target.value)} >
  </input>        
 <Button variant="primary" type="button" onClick={login}>
                    התחבר
                </Button>
           </Form> */}
        </Container >
    );
}

export default LoginPage;