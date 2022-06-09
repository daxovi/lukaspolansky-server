import React from 'react'
import './App.css';
import Main from "./pages/Main";
import Header from "./components/Header";
import AddUser from "./pages/AddUser";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { loggedIn } from './context/CheckLogin';
import Course from './pages/Course';
import { useState, createContext, useEffect } from "react";
import Footer from './components/Footer';

const App = () => {
  const [userObject, setUserObject] = useState();

  const updateDB = () => {
    loggedIn().then((value) => {
      if (value) {
        setUserObject(value);
      }
    });
  }

  useEffect(() => {
    updateDB();
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Header userObject={userObject} />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/add-user" component={AddUser} />
            <Route exact path="/login" component={userObject ? Dashboard : Login} />
            <Route exact path="/dashboard">
              {userObject ? <Dashboard userObject={userObject} /> : <Login />}
            </Route>
            <Route exact path="/course">
            {userObject ? <Course userObject={userObject} /> : <Login />}
              </Route>
          </Switch>
        </div>
        <Footer userObject={userObject} />
      </BrowserRouter>
    </div>
  )
}

export default App

