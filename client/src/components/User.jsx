import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalContext/GlobalContext"
const User = ({cislovporadi,name}) => {
    const {zmenSurovinu} = useContext(GlobalContext);
    return (
        <div>
           {cislovporadi} - {name}
           <div className="btn" onClick={() => {
               zmenSurovinu(name);
           }}>Zobraz detail</div>
        </div>
    )
}
export default User