import React from 'react'
import './App.css';
import Main from "./pages/Main";
import AddUser from "./pages/AddUser";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Course from './pages/Course';

const App = () => {

  return (
    <div className="content">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/add-user" component={AddUser} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/course" component={Course} />

      </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App

