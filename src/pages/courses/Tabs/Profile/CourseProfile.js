import React, { useState, useEffect, useContext } from "react";
import PortalInput from "../../../../components/PortalInput";
import PortalInputSelect from "../../../../components/PortalInputSelect/PortalInputSelect";
import { Container, Row, Col } from "react-bootstrap";
import "./CourseProfile.css";
import server from "../../../../shared/server";
import ActiveUserContext from "../../../../shared/activeUserContext";
import PortalMultipleSelect from "../../../../components/PortalMultipleSelect/PortalMultipleSelect";
const CourseProfile = (props) => {
    
    const {courseId} = props;

    const [courseName, setCourseName] = useState("");
    const [hebrewShortName, setHebrewShortName] = useState("");
    const [arabShortName, setarabShortName] = useState("");
    const [project, setProject] = useState("");
    const [projectList, setProjectList] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);
    const [tagsList, setTagsList] = useState([
        { value: "1", label: "תגית 1" },
        { value: "2", label: "תגית 2" },
        { value: "3", label: "תגית 3" }
      ]);
    const [hideSelectList, setHideSelectList] = useState(true);
    const [city, setCity] = useState("");
    const [cityList, setCityList] = useState([]);
    const [budgetYear, setBudgetYear] = useState("");
    const [budgetYearList, setBudgetYearList] = useState([]);
    const [instructer, setInstructer] = useState("");

    const activeUser = useContext(ActiveUserContext);

    useEffect(() => {
        // read data from server using courseId and updates all the fields
        server(activeUser, {courseid: courseId}, "GetCourseById").then(res => {
            setCourseName(res.data.name);
            setHebrewShortName(res.data.subname);
            setarabShortName(res.data.subnameinarabic);
            setProject(res.data.projectid);
            setCity(res.data.cityid);
            setBudgetYear(res.data.yearbudgetid);
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
                const y = {key: project.projectid, value: project.projectname, label: project.projectname, tags: project.projecttags}
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


    // update tags
    useEffect(() => {
        console.log(project);
        if(projectList && project){
            setTagsSelected([]);
            const projectObj = projectList.find(currProject => currProject.key === project);
            let x=[];
                projectObj.tags.forEach(tag => {
                    const y = {value: tag.projecttagid, label: tag.projecttagname}
                    x.push(y);
                })
                setTagsList(x);
        }
    }, [project, projectList])

    function displaySelectList(){
        setHideSelectList(!hideSelectList);
      };
    // Callback function that adds a selected option from the tags array
    // and deletes it from the tags array
    function addOption(tag) {
        setTagsSelected(tagsSelected.concat(tag));
        for (let i = 0; i < tagsList.length; i++) {
            if (tagsList[i].value === tag.value) {
                tagsList.splice(i, 1);
                setTagsList(tagsList);
                break;
            }
        }
        setHideSelectList(false);
    };
    // Callback function that deletes a selected option from the tagsSelected array
    // and add it back to the tagsList array
    function deleteOption(index) {
        const tempOption = tagsSelected[index];
        const cloneList = [...tagsSelected];
        cloneList.splice(index, 1);
        setTagsSelected(cloneList);
        setTagsList(tagsList.concat(tempOption));
    };
    // Callback function that deletes all selected tagsList from the tagsSelected array
    // and adds them back to the tagsList array
    function deleteAllOptions(){
        const cloneList = [...tagsSelected];
        setTagsSelected([]);
        setTagsList(tagsList.concat(cloneList));
        setHideSelectList(true);
    };
    return (
        <Container className="profileContainer">
            <Row className="profileRow">
                <Col>
                    <PortalInput inputTitle="שם קורס מלא" inputPlaceholder={courseName} inputValue={courseName} handleChange={(v) => setCourseName(v)}/>
                </Col>
            </Row>
            <Row className="profileRow">
                <Col>
                    <PortalInput inputTitle="שם קורס מקוצר בעברית" inputPlaceholder={hebrewShortName} inputValue={hebrewShortName} handleChange={(v) => setHebrewShortName(v)}/>
                </Col>
                <Col>
                    <PortalInput inputTitle="שם קורס מקוצר בערבית" inputPlaceholder={arabShortName} inputValue={arabShortName} handleChange={(v) => setarabShortName(v)}/>
                </Col>
            </Row>
            <Row className="profileRow">
                <Col>
                    <PortalInputSelect inputTitle="פרויקט" options={projectList} optionsKey={project} handleSelection={(v) => setProject(v)}/>
                </Col>
            </Row>
            <Row className="profileRow">
                <Col>
                    <PortalMultipleSelect label="תגיות" displaySelectList={() => displaySelectList()} hideSelectList={hideSelectList} options={tagsList} selectedOptions={tagsSelected} addOption={(tag) => addOption(tag)} deleteOption={(i) => deleteOption(i)} deleteAllOptions={() => deleteAllOptions()}/>
                </Col>
            </Row>
            <Row className="profileRow">
                <Col>
                    <PortalInputSelect inputTitle="עיר" options={cityList} optionsKey={city} handleSelection={(v) => setCity(v)}/>
                </Col>
                <Col>
                    <PortalInputSelect inputTitle="שנת תקציב" options={budgetYearList} optionsKey={budgetYear} handleSelection={(v) => setProject(v)}/>
                </Col>
            </Row>
            <Row className="profileRow">
                <Col>
                    <PortalInput inputTitle="מדריך" inputPlaceholder={instructer} inputValue={instructer} handleChange={(v) => setInstructer(v)}/>
                </Col>
            </Row>
        </Container>
    );
}

export default CourseProfile;