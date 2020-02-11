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

  const [activeUser, setActiveUser] = useState(null);

  const handleLogin = (activeUser) => {
    setActiveUser(activeUser);
  }

  return (
    <ActiveUserContext.Provider value={activeUser}>
      <Switch>
        <Route exact path="/">
          <LoginPage handleLogin={handleLogin} />
        </Route>
        <Route exact path="/courses">
          <CoursesPage />
        </Route>
        <Route path="/courses/:id">
          <CourseDetailsPage />
        </Route>
        <Route exact path="/users">
          <UsersPage />
        </Route>
        <Route path="/users/:id">
          <UserDetailsPage />
        </Route>
        <Route path="/hours-report">
          <HoursReportPage />
        </Route>
        <Route path="/hours-approve">
          <HoursApprovePage />
        </Route>
      </Switch>
    </ActiveUserContext.Provider>
  );
}

export default App;
