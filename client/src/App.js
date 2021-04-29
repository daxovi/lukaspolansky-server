import React from 'react'
import './App.css';
import Main from "./pages/Main";
import AddMaterials from "./pages/AddMaterials";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Menu from "./components/Menu";
import {GlobalProvider} from "./context/GlobalContext/GlobalContext"
const App = () => {
  return (
    <GlobalProvider>
        <BrowserRouter>
          <Menu />
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/add-material" component={AddMaterials} />
          </Switch>
        </BrowserRouter>
      </GlobalProvider>
  )
}

export default App

