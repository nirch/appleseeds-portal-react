import React, { useState, useEffect } from "react";
import PortalInput from "../../../../components/PortalInput";
import PortalInputSelect from "../../../../components/PortalInputSelect/PortalInputSelect";
import { Container, Row, Col } from "react-bootstrap";

const CourseProfile = (props) => {
    
    const {courseId} = props;

    const [courseName, setCourseName] = useState("");
    const [hebrewShortName, setHebrewShortName] = useState("");
    const [arabShortName, setarabShortName] = useState("");
    const [project, setProject] = useState([{key : "0", value: "blue"} , {key: "1", value: "red"}]);
    const [tags, setTags] = useState("");
    const [city, setCity] = useState([{key : "0", value: "blue"} , {key: "1", value: "red"}]);
    const [budgetYear, setBudgetYear] = useState([{key : "0", value: "blue"} , {key: "1", value: "red"}]);
    const [instructer, setInstructer] = useState("");

    //... state for each input

    /*const [, ] = useState("");*/
    function emptyFunc() {
    }

    useEffect(() => {
        // read data from server using courseId and updates all the fields
        setCourseName("Test 1");
        setHebrewShortName("Test 1");
        setarabShortName("Test 1");
        setProject([{key : "0", value: "blue"} , {key: "1", value: "red"}]);
        setTags("Test 1");
        setCity([{key : "0", value: "blue"} , {key: "1", value: "red"}]);
        setBudgetYear([{key : "0", value: "blue"} , {key: "1", value: "red"}]);
        setInstructer("Test 1");

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
                    <PortalInput inputTitle="שם קורס מקוצר בעברית" inputPlaceholder={hebrewShortName} handleChange={() => emptyFunc()}/>
                    <PortalInput inputTitle="שם קורס מקוצר בערבית" inputPlaceholder={arabShortName} handleChange={() => emptyFunc()}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalInputSelect inputTitle="פרויקט" options={project} optionsKey="0" handleSelection=""/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalInput inputTitle="תגיות" inputPlaceholder={tags} handleChange={() => emptyFunc()}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalInputSelect inputTitle="עיר" options={city} optionsKey="0" handleSelection=""/>
                    <PortalInputSelect inputTitle="שנת תקציב" options={budgetYear} optionsKey="0" handleSelection=""/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalInput inputTitle="מדריך" inputPlaceholder={instructer} handleChange={() => emptyFunc()}/>
                </Col>
            </Row>
        </Container>
    );
}

export default CourseProfile;