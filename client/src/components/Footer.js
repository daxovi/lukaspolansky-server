import React from 'react'
import { useHistory } from 'react-router-dom'
import "./Footer.css";

const Footer = (props) => {
  const message = props.userObject ? `Je přihlášený uživatel ` + props.userObject.name : "Nepřihlášený uživatel";
  const history = useHistory();

  return (
    <div className="header--content">
      <div>{message}</div>
      <br></br>
      <div className='controls'>
        <div>
          <button onClick={() => { history.push("./dashboard") } } className="btn btn-minimal">přehled</button>
          <button onClick={() => { history.push("./course") } } className="btn btn-minimal">kurz</button>
        </div>
        <div>
          <button className="btn btn-minimal">poslat připomínku</button>
          <button className='btn' onClick={() => {
            localStorage.setItem("user", JSON.stringify(""));
            window.location.reload();
          }}>Odhlásit se</button>
        </div>
      </div>
    </div>
  )
}

export default Footer