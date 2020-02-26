import React, {Fragment, useContext, useEffect, useState} from 'react';
import PortalInput from "../PortalInput";
import PortalInputSelect from "../../components/PortalInputSelect/PortalInputSelect";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import server from "../../shared/server";
import ActiveUserContext from "../../shared/activeUserContext";
import PortalMultipleSelect from "../../components/PortalMultipleSelect/PortalMultipleSelect";

function UserProfile(props) {
    const [profile,setProfile] = useState({});
    const [cities, setCities] = useState([]);
    const [genders, setGenders] = useState([]);
    const [religions, setReligions] = useState([]);
    const [tagsList, setTagsList] = useState([
        { value: "1", label: "תגית 1" },
        { value: "2", label: "תגית 2" },
        { value: "3", label: "תגית 3" }
    ]);

    const [tagsSelected, setTagsSelected] = useState([]);
    const [hideSelectList, setHideSelectList] = useState(true);
    const activeUser = useContext(ActiveUserContext);
    const handleChange = (e) => {
        console.log(e.target);
    };

    useEffect(()=> {
        const getUserProfileById = async () => {
            await server(activeUser, {userId: props.user}, 'GetUserProfileById').then(res => {
                console.log(res);
                if (res.data.error) {
                    alert("error in login");
                } else {
                    setProfile(res.data.profile);
                }
            }, err => {
                console.error(err);
            });
        };
        const getCities = async () => {
            await server(activeUser, {}, 'GetCities').then(res => {
                console.log(res);
                if (res.data.error) {
                    alert("error in login");
                } else {
                    setCities(res.data.map(city => {
                        return {
                            key:city.cityid,
                            label: city.name
                        }
                    }));
                }
            }, err => {
                console.error(err);
            });
        };
        const getGenders = async () => {
            await server(activeUser, {}, 'GetGenders').then(res => {
                console.log(res);
                if (res.data.error) {
                    alert("error in login");
                } else {
                    setGenders(res.data.map(item => {
                        return {
                            key: item.genderid,
                            label: item.name
                        }
                    }));
                }
            }, err => {
                console.error(err);
            });
        };
        const getReligions = async () => {
            await server(activeUser, {}, 'GetReligions').then(res => {
                console.log(res);
                if (res.data.error) {
                    alert("error in login");
                } else {
                    setReligions(res.data.map(item => {
                        return {
                            key: item.religionid,
                            label: item.name
                        }
                    }));
                }
            }, err => {
                console.error(err);
            });
        };
        Promise.all([getUserProfileById(),getCities(),getGenders(),getReligions()]).then((values)=> {
            console.log(values);
        })
    },[]);

    if (cities.length < 1 && profile){
        return <Fragment/>
    }

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


    const {userid, firstname, lastname, firstnameinarabic, lastnameinarabic,phone,phone2,phone2owner,superstaffname,tznumber,birthday,email,cityid,religionid,genderid,address} = profile;
    return (
        <Container>
            <Row>
                <Col>
                    <PortalInput inputTitle={'שם פרטי בעברית'} inputPlaceholder={firstname}
                                 handleChange={(e) => handleChange(e)}/>
                </Col>
                <Col>
                    <PortalInput inputTitle={'שם משפחה בעברית'} inputPlaceholder={lastname}
                                 handleChange={() => (e) => handleChange(e)}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalInput inputTitle={'שם פרטי בערבית'} inputPlaceholder={firstnameinarabic}
                                 handleChange={() => (e) => handleChange(e)}/>
                </Col>
                <Col>
                    <PortalInput inputTitle={'שם משפחה בערבית'} inputPlaceholder={lastnameinarabic}
                                 handleChange={() => (e) => handleChange(e)}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalInput inputTitle={'מס\' טלפון'} inputPlaceholder={phone}
                                 handleChange={() => (e) => handleChange(e)}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalInput inputTitle={'מס\' טלפון נוסף'} inputPlaceholder={phone2}
                                 handleChange={() => (e) => handleChange(e)}/>
                </Col>
                <Col>
                    <PortalInput inputTitle={'שייך ל'} inputPlaceholder={phone2owner}
                                 handleChange={() => (e) => handleChange(e)}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalInput inputTitle={'תאריך לידה'} inputPlaceholder={birthday}
                                 handleChange={() => (e) => handleChange(e)}/>
                </Col>
                <Col>
                    <PortalInput inputTitle={'מספר תעודת זהות'} inputPlaceholder={tznumber}
                                 handleChange={() => (e) => handleChange(e)}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalInputSelect inputTitle={'עיר'}
                                 handleSelection={() => (e) => handleChange(e)} options={cities} optionsKey={cityid}/>
                </Col>
                <Col>
                    <PortalInput inputTitle={'כתובת'} inputPlaceholder={address}
                                 handleChange={() => (e) => handleChange(e)}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalInputSelect inputTitle={'מגזר'}
                                       handleSelection={() => (e) => handleChange(e)} options={religions} optionsKey={religionid}/>
                </Col>
                <Col>
                    <PortalInputSelect inputTitle={'מגדר'}
                                       handleSelection={() => (e) => handleChange(e)} options={genders} optionsKey={genderid}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalInput inputTitle={'אימייל'} inputPlaceholder={email}
                                 handleChange={() => (e) => handleChange(e)}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalInput inputTitle={'מנהל ישיר'} inputPlaceholder={phone}
                                 handleChange={() => (e) => handleChange(e)}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalInput inputTitle={'מאשרי שעות נוספים'} inputPlaceholder={superstaffname}
                                 handleChange={() => (e) => handleChange(e)}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalMultipleSelect label='מאשרי שעות נוספים' displaySelectList={() => displaySelectList()} hideSelectList={hideSelectList} options={tagsList} selectedOptions={tagsSelected} addOption={(tag) => addOption(tag)} deleteOption={(i) => deleteOption(i)} deleteAllOptions={() => deleteAllOptions()}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalMultipleSelect label="תעודות" displaySelectList={() => displaySelectList()} hideSelectList={hideSelectList} options={tagsList} selectedOptions={tagsSelected} addOption={(tag) => addOption(tag)} deleteOption={(i) => deleteOption(i)} deleteAllOptions={() => deleteAllOptions()}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalMultipleSelect label='תעודות בגרות' displaySelectList={() => displaySelectList()} hideSelectList={hideSelectList} options={tagsList} selectedOptions={tagsSelected} addOption={(tag) => addOption(tag)} deleteOption={(i) => deleteOption(i)} deleteAllOptions={() => deleteAllOptions()}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalMultipleSelect label="שונות" displaySelectList={() => displaySelectList()} hideSelectList={hideSelectList} options={tagsList} selectedOptions={tagsSelected} addOption={(tag) => addOption(tag)} deleteOption={(i) => deleteOption(i)} deleteAllOptions={() => deleteAllOptions()}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalMultipleSelect label="פרויקטים" displaySelectList={() => displaySelectList()} hideSelectList={hideSelectList} options={tagsList} selectedOptions={tagsSelected} addOption={(tag) => addOption(tag)} deleteOption={(i) => deleteOption(i)} deleteAllOptions={() => deleteAllOptions()}/>
                </Col>
            </Row>
        </Container>
    );
}

export default UserProfile;