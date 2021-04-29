import React,{useContext} from 'react'
import {Link} from "react-router-dom";
import {GlobalContext} from "../context/GlobalContext/GlobalContext";
const Menu = () => {
    const {surovina} = useContext(GlobalContext);
    
    return (
        <div class="menu">
           <Link to="/">Hlavní stránka</Link>
           <Link to="/add-material">Přidání materiálu</Link>
           <div>{surovina}</div>
        </div>
    )
}

export default Menu
