import React, { useState, useEffect, useContext } from "react";
import PortalInput from "../../../../components/PortalInput";
import PortalInputSelect from "../../../../components/PortalInputSelect/PortalInputSelect";
import { Container, Row, Col } from "react-bootstrap";
import "./CourseProfile.css";
import server from "../../../../shared/server";
import ActiveUserContext from "../../../../shared/activeUserContext";
const CourseProfile = (props) => {
    
    const {courseId} = props;

    const [courseName, setCourseName] = useState("");
    const [hebrewShortName, setHebrewShortName] = useState("");
    const [arabShortName, setarabShortName] = useState("");
    const [project, setProject] = useState("");
    const [projectList, setProjectList] = useState([]);
    const [tags, setTags] = useState("");
    const [city, setCity] = useState("");
    const [cityList, setCityList] = useState([]);
    const [budgetYear, setBudgetYear] = useState("");
    const [budgetYearList, setBudgetYearList] = useState([]);
    const [instructer, setInstructer] = useState("");
    const activeUser = useContext(ActiveUserContext);

    function emptyFunc() {
    }

    useEffect(() => {
        // read data from server using courseId and updates all the fields
        server(activeUser, {courseid: courseId}, "GetCourseById").then(res => {
            setCourseName(res.data.name);
            setHebrewShortName(res.data.subname);
            setarabShortName(res.data.subnameinarabic);
            setProject(res.data.projectid);
            setTags("טעגס");
            setCity(res.data.cityid);
            setBudgetYear([{key : "0", value: "כחול", label:"כחול"} , {key: "1", value: "אדום", label:"אדום"}]);
            setInstructer(res.data.primaryTeacherName);
        })
        server(activeUser, {}, "GetCities").then(res => {
            let x=[];
            res.data.forEach(city => {
                const y = {key: city.cityid, value: city.name, label: city.name}
                x.push(y);
            })
            setCityList(x);            
        })
        server(activeUser, {}, "GetProjects").then(res => {
            let x=[];
            res.data.forEach(project => {
                const y = {key: project.projectid, value: project.projectname, label: project.projectname}
                x.push(y);
            })
            setProjectList(x);            
        })
        server(activeUser, {}, "GetActiveYearsBudget").then(res => {
            let x=[];
            res.data.forEach(year => {
                const y = {key: year.yearbudgetid, value: year.year, label: year.year}
                x.push(y);
            })
            setBudgetYearList(x);            
        })
 
    }, [])

    return (
        <Container className="profileContainer">
            <Row className="profileRow">
                <Col>
                    <PortalInput inputTitle="שם קורס מלא" inputPlaceholder={courseName} inputValue={courseName} handleChange={() => emptyFunc()}/>
                </Col>
            </Row>
            <Row className="profileRow">
                <Col>
                    <PortalInput inputTitle="שם קורס מקוצר בעברית" inputPlaceholder={hebrewShortName} inputValue={hebrewShortName} handleChange={() => emptyFunc()}/>
                </Col>
                <Col>
                    <PortalInput inputTitle="שם קורס מקוצר בערבית" inputPlaceholder={arabShortName} inputValue={arabShortName} handleChange={() => emptyFunc()}/>
                </Col>
            </Row>
            <Row className="profileRow">
                <Col>
                    <PortalInputSelect inputTitle="פרויקט" options={projectList} optionsKey={project} handleSelection={() => emptyFunc()}/>
                </Col>
            </Row>
            <Row className="profileRow">
                <Col>
                    <PortalInput inputTitle="תגיות" inputPlaceholder={tags} inputValue={tags} handleChange={() => emptyFunc()}/>
                </Col>
            </Row>
            <Row className="profileRow">
                <Col>
                    <PortalInputSelect inputTitle="עיר" options={cityList} optionsKey={city} handleSelection={() => emptyFunc()}/>
                </Col>
                <Col>
                    <PortalInputSelect inputTitle="שנת תקציב" options={budgetYearList} optionsKey={budgetYear} handleSelection={() => emptyFunc()}/>
                </Col>
            </Row>
            <Row className="profileRow">
                <Col>
                    <PortalInput inputTitle="מדריך" inputPlaceholder={instructer} inputValue={instructer} handleChange={() => emptyFunc()}/>
                </Col>
            </Row>
        </Container>
    );
}

export default CourseProfile;