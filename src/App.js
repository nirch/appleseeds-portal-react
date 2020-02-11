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

import './App.css';

const App = () => {

  const [activeUser, setActiveUser] = useState(null);

  const handleLogin = (activeUser) => {
    setActiveUser(activeUser);
  }

  return (
    <Switch>
      <Route exact path="/">
        <LoginPage activeUser={activeUser} handleLogin={handleLogin} />
      </Route>
      <Route exact path="/courses">
        <CoursesPage activeUser={activeUser} />
      </Route>
      <Route path="/courses/:id">
        <CourseDetailsPage activeUser={activeUser} />
      </Route>
      <Route exact path="/users">
        <UsersPage activeUser={activeUser} />
      </Route>
      <Route path="/users/:id">
        <UserDetailsPage activeUser={activeUser} />
      </Route>
      <Route path="/hours-report">
        <HoursReportPage activeUser={activeUser} />
      </Route>
      <Route path="/hours-approve">
        <HoursApprovePage activeUser={activeUser} />
      </Route>
    </Switch>
  );
}

export default App;