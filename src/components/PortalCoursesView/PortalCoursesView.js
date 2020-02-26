import React, { useState, useContext, useEffect } from 'react';
import './PortalCourseView.css'
import server from '../../shared/server';
import ActiveUserContext from '../../shared/activeUserContext'


const PortalCourseView = (props) => {

    const { courseId } = props;
    const [courseName, setCourseName] = useState("");
    const [hebrewShortName, setHebrewShortName] = useState("");

    const [employeeRegD, setemployeeRegD] = useState("");

    const activeUser = useContext(ActiveUserContext);



    useEffect(() => {
        // read data from server using courseId and updates all the fields
        server(activeUser, { courseid: courseId }, "GetCourseById").then(res => {
            setCourseName(res.data.name);
            setHebrewShortName(res.data.subname);
            // setarabShortName(res.data.subnameinarabic);
            // setProject(res.data.projectid);
            // setCity(res.data.cityid);
            // setBudgetYear([{key : "0", value: "כחול", label:"כחול"} , {key: "1", value: "אדום", label:"אדום"}]);
            // setInstructer(res.data.primaryTeacherName);
        })






    }, [courseId])


    return (
        <div className="c_portalHeaderView c_portalCoursesView">

            <div className="container">
                <p>{hebrewShortName}</p>
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
            {/* <p>{employeeFamily}</p> */}

            <p className="subHeader"> {courseName} </p>


        </div>



    );
}

export default PortalCourseView;
