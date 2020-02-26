import React, {Fragment, useContext, useEffect, useState} from 'react';
import PortalInput from "../PortalInput";
import PortalInputSelect from "../../components/PortalInputSelect/PortalInputSelect";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import server from "../../shared/server";
import ActiveUserContext from "../../shared/activeUserContext";

function UserProfile(props) {
    const [profile,setProfile] = useState({});
    const [cities, setCities] = useState([]);
    const [genders, setGenders] = useState([]);
    const [religions, setReligions] = useState([]);

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
    debugger
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
                    <PortalInput inputTitle={'תעודות'} inputPlaceholder={phone}
                                 handleChange={() => (e) => handleChange(e)}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalInput inputTitle={'תעודות בגרות'} inputPlaceholder={phone}
                                 handleChange={() => (e) => handleChange(e)}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalInput inputTitle={'שםות'} inputPlaceholder={phone}
                                 handleChange={() => (e) => handleChange(e)}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PortalInput inputTitle={'פרויקטים'} inputPlaceholder={phone}
                                 handleChange={() => (e) => handleChange(e)}/>
                </Col>
            </Row>
        </Container>
    );
}

export default UserProfile;