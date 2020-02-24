import React, { useState, useEffect } from "react";
import PortalInput from "../../../../components/PortalInput";
import PortalInputSelect from "../../../../components/PortalInputSelect/PortalInputSelect";
import { Container, Row, Col } from "react-bootstrap";
import "./CourseProfile.css";

const CourseProfile = (props) => {
    
    const {courseId} = props;

    const [courseName, setCourseName] = useState("");
    const [hebrewShortName, setHebrewShortName] = useState("");
    const [arabShortName, setarabShortName] = useState("");
    const [project, setProject] = useState([]);
    const [tags, setTags] = useState("");
    const [city, setCity] = useState([]);
    const [budgetYear, setBudgetYear] = useState([]);
    const [instructer, setInstructer] = useState("");

    //... state for each input

    /*const [, ] = useState("");*/
    function emptyFunc() {
    }

    useEffect(() => {
        // read data from server using courseId and updates all the fields
        setCourseName("טסט1");
        setHebrewShortName("טסט1");
        setarabShortName("טסט1");
        setProject([{key : "0", value: "blue"} , {key: "1", value: "red"}]);
        setTags("טסט1");
        setCity([{key : "0", value: "blue"} , {key: "1", value: "red"}]);
        setBudgetYear([{key : "0", value: "blue"} , {key: "1", value: "red"}]);
        setInstructer("טסט1");

    }, [])

    return (
        <Container>
            <Row>
                <Col>
                    <PortalInput inputTitle="שם קורס מלא" inputPlaceholder={courseName} inputValue={courseName} handleChange={() => emptyFunc()}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalInput inputTitle="שם קורס מקוצר בעברית" inputPlaceholder={hebrewShortName} inputValue={hebrewShortName} handleChange={() => emptyFunc()}/>
                </Col>
                <Col>
                    <PortalInput inputTitle="שם קורס מקוצר בערבית" inputPlaceholder={arabShortName} inputValue={arabShortName} handleChange={() => emptyFunc()}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalInputSelect inputTitle="פרויקט" options={project} optionsKey="0" handleSelection={() => emptyFunc()}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalInput inputTitle="תגיות" inputPlaceholder={tags} inputValue={tags} handleChange={() => emptyFunc()}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalInputSelect inputTitle="עיר" options={city} optionsKey="0" handleSelection={() => emptyFunc()}/>
                </Col>
                <Col>
                    <PortalInputSelect inputTitle="שנת תקציב" options={budgetYear} optionsKey="0" handleSelection={() => emptyFunc()}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalInput inputTitle="מדריך" inputPlaceholder={instructer} inputValue={instructer} handleChange={() => emptyFunc()}/>
                </Col>
            </Row>
        </Container>
    );
}

export default CourseProfile;