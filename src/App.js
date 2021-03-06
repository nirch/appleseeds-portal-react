import React, { useState } from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import CoursesPage from './pages/courses/CoursesPage'
import CourseDetailsPage from './pages/courses/CourseDetailsPage'
import UsersPage from './pages/users/UsersPage'
import UserDetailsPage from './pages/users/UserDetailsPage'
import HoursReportPage from './pages/hours/HoursReportPage'
import HoursApprovePage from './pages/hours/HoursApprovePage'
import ActiveUserContext from './shared/activeUserContext'

import './App.css';

const App = () => {

  const [activeUser, setActiveUser] = useState(localStorage.activeUser ? JSON.parse(localStorage.activeUser) : null);

  const handleLogin = (activeUser) => {
    setActiveUser(activeUser);
    localStorage.activeUser = JSON.stringify(activeUser);
  }

  const handleLogout = () => {
    setActiveUser(null);
    localStorage.removeItem("activeUser");
  }

  return (
    <ActiveUserContext.Provider value={activeUser}>
      <Switch>
        <Route exact path="/">
          <LoginPage handleLogin={handleLogin} />
        </Route>
        <Route exact path="/courses">
          <CoursesPage handleLogout={handleLogout}/>
        </Route>
        <Route path="/courses/:id">
          <CourseDetailsPage handleLogout={handleLogout}/>
        </Route>
        <Route exact path="/users" render={ props => <UsersPage {...props}/>}/>
        <Route path="/users/:id" render={ props => <UserDetailsPage {...props} handleLogout={handleLogout}/>}>
        </Route>
        <Route path="/hours-report">
          <HoursReportPage handleLogout={handleLogout}/>
        </Route>
        <Route path="/hours-approve">
          <HoursApprovePage handleLogout={handleLogout}/>
        </Route>
      </Switch>
    </ActiveUserContext.Provider>
  );
};

export default App;
