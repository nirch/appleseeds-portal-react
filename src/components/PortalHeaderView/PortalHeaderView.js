import React, { useState, useContext } from 'react';
import './PortalHeaderView.css'
import server from '../../shared/server';
import ActiveUserContext from '../../shared/activeUserContext'


const PortalHeaderView = (props) => {

    const [employeeName, setemployeeName] = useState("שם העובד");
    const [employeeRegD, setemployeeRegD] = useState("");
    const [employeeFamily, setemployeeFamily] = useState("שם משפחה");
    const activeUser = useContext(ActiveUserContext);
    let myObj = {};
    server(activeUser, myObj, "GetUserExtendedProfile").then(res => {
        console.log(res);
        if (res.data.error) {

            setemployeeName("שם העובד");
            setemployeeFamily("שם משפחה");
        } else {
            setemployeeName(res.data.firstname);
            setemployeeFamily(res.data.lastname);
            setemployeeRegD(res.data.registerdate)
        }
    });

    return (
        <div className="c_portalHeaderView">

            <div className="container">
                <p>{employeeName}</p>
                <div className="flextoleft">
                    <div className="firstimg">

                        <img src="drawable-mdpi/noun_back_arrow_2690272.png" />
                    </div>
                    <div className="secondimg">
                        <img src="drawable-mdpi/noun_copy_573715.png" />
                    </div>
                    <div className="thirdimg">
                        <img src="drawable-mdpi/noun_save_2429243.png" />
                    </div>
                </div>
            </div>
            <p>{employeeFamily}</p>
            <div className="changepass">
                <div>
                    <input type="checkbox" id="scales" name="scales" />
                    <label for="scales">שינוי סיסמה</label>
                </div>
                <img src="drawable-mdpi/profile_icon.png" />

            </div>
            <p>נרשם ב : {employeeRegD} </p>


        </div>



    );
}

export default PortalHeaderView;
