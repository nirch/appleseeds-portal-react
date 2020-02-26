import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './navbar.css'

const PortalNavbar = (props) => {
    const { handleLogout, handleBack, navbarTitle, navbarArrow } = props;
    //const navbarTitle = "קורסים"; // props;
    //const navbarArrow = true; // props;

    const [showUsersTypes, setShowUsersTypes] = useState(false);
    const [showMenu, setShowMenu] = useState(false);


    const openMenu = showMenu ? "sidebar-open" : "sidebar-close"
    const showHideDivClasses = showUsersTypes ? "showHide showUsersTypes" : "showHide";
    const arrowDivClasses = showUsersTypes ? "iconDown iconUp" : "iconDown";

    const hamburgerView = <div className="menu-icon" onClick={() => { setShowMenu(!showMenu); }} >
        <div className="hamburger-menu">
            <div></div>
            <div></div>
            <div></div>
        </div></div>;

    const backarrowView = <div className="menu-icon"  onClick={() => { handleBack() }}>
        <div class="arrow-back" o>
            <div class="arrow1"></div>
            <div class="arrow2"></div>
            <div class="arrow3"></div>
        </div>
    </div>;

    const backArrowShow = navbarArrow ? backarrowView : hamburgerView;

    return (
        <div className="c-navbar">
            <div className="menuTitleFlex">
                <div className="menuTitle">{navbarTitle}</div>
            </div>
            <div className="menu-icon-wrap">
                <div>
                    {backArrowShow}

                    <div className="menu-icon dartIcon" ng-click="backClick()"></div>
                </div>

                <div className={openMenu}>
                    <div className="sidebar-background" ng-click="closeSidebar()"></div>
                    <div className="sidebar-wrap">
                        <div className="sidebar">
                            <div className="sidebar-options">
                                <Container>
                                    <Row>
                                        <div className="sidebar-closebtn">
                                            <img alt="" className="closebtn" src="images/close_x_white.svg" onClick={() => { setShowMenu(!showMenu); }} />
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="sidebar-header">
                                            <img alt="" className="appleseeds-logo" src="images/bg_logo.png"></img>
                                        </div>
                                    </Row>
                                    <div className="sidebar-username">
                                        <Row className="flexalign">
                                            <Col className="flex" xs={3}>
                                                <img alt="" className="profile-image" src="images/profile_icon.png"></img>
                                            </Col>
                                            <Col xs={9}>
                                                <div className="name-wrap">
                                                    <span className="user-name">
                                                        יעל כהן לבקוביץ
                                                    </span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="divider" />

                                    <div onClick={() => { setShowUsersTypes(!showUsersTypes); }}>
                                        <Row className="flexalign">
                                            <Col className="flex" xs={3}><img alt="" className="icon1" src="images/noun_user.png" /></Col>
                                            <Col xs={7}><div className="menu-information">משתמשים</div></Col>
                                            <Col xs={2}><img alt="" id="arrow" className={arrowDivClasses} src="images/arrow_down.png" /></Col>
                                        </Row>
                                    </div>
                                    <div className={showHideDivClasses}>
                                        <Row className="usersTypes">
                                            <Col xs={3}></Col>
                                            <Col xs={9}><a className="menu-information" href="#/users?staff" onClick={() => { setShowMenu(!showMenu); }}>עובדים</a></Col>
                                        </Row>
                                        <Row className="usersTypes">
                                            <Col xs={3}></Col>
                                            <Col xs={9}><a className="menu-information" href="#/users?students" onClick={() => { setShowMenu(!showMenu); }}>חניכים</a></Col>
                                        </Row>
                                        <Row className="usersTypes">
                                            <Col xs={3}></Col>
                                            <Col xs={9}><a className="menu-information" href="#/users?newUsers" onClick={() => { setShowMenu(!showMenu); }}>משתמשים חדשים</a></Col>
                                        </Row>
                                    </div>
                                    <div className="divider" />
                                    <Row>
                                        <Col className="flex" xs={3}><img alt="" className="icon2" src="images/noun_book.png" /></Col>
                                        <Col xs={9}><a className="menu-information" href="#/courses" onClick={() => { setShowMenu(!showMenu); }}>קורסים</a></Col>
                                    </Row>
                                    <div className="divider" />
                                    <Row>
                                        <Col className="flex" xs={3}><img alt="" className="icon3" src="images/noun_time.png" /></Col>
                                        <Col xs={9}><a className="menu-information" href="#/hours-report" onClick={() => { setShowMenu(!showMenu); }}>דיווח שעות</a></Col>
                                    </Row>
                                    <div className="divider" />
                                    <Row>
                                        <Col className="flex" xs={3}><img alt="" className="icon4" src="images/noun_check_box.png" /></Col>
                                        <Col xs={9}><a className="menu-information" href="#/hours-approve" onClick={() => { setShowMenu(!showMenu); }}>אישור שעות</a></Col>
                                    </Row>
                                    <div className="divider" />
                                    <div className="sidebar-logout">
                                        <Row>
                                            <Col className="flex" xs={3}><img alt="" className="icon5" src="images/noun_off.png" /></Col>
                                            <Col xs={9}><a className="menu-information" href="#" onClick={handleLogout}>התנתקות</a></Col>
                                        </Row>
                                    </div>
                                </Container>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortalNavbar;

