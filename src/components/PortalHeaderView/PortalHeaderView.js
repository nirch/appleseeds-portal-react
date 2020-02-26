import React, { useState, useContext } from 'react';
import './PortalHeaderView.css'
import server from '../../shared/server';
import ActiveUserContext from '../../shared/activeUserContext'


const PortalHeaderView = (props) => {
    const { userId } = props;
    const [empImg, setemImg] = useState("drawable-mdpi/profile_icon.png");
    const [employeeName, setemployeeName] = useState("שם העובד");
    const [employeeRegD, setemployeeRegD] = useState("");
    const [employeeFamily, setemployeeFamily] = useState("שם משפחה");
    const activeUser = useContext(ActiveUserContext);

    let myObj = { userId: userId };
    server(activeUser, myObj, "GetUserProfileById").then(res => {
        console.log(res);
        if (res.data.error) {

            setemployeeName("שם העובד");
            setemployeeFamily("שם משפחה");
        } else {
            setemployeeName(res.data.profile.firstname);
            setemployeeFamily(res.data.profile.lastname);
            setemployeeRegD(res.data.profile.registerdate);
            if (res.data.profile.image != "") {
                setemImg("https://pil1.appleseeds.org.il/dcnir/" + res.data.profile.image);
            }
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
                <img src={empImg} />

            </div>
            <p>נרשם ב : {employeeRegD} </p>


        </div>



    );
}

export default PortalHeaderView;
