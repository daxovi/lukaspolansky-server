import React from 'react'
import { useHistory } from 'react-router-dom'
import "./Footer.css";

const Footer = (props) => {
  const message = props.userObject ? `Je přihlášený uživatel ` + props.userObject.name : "Nepřihlášený uživatel";
  const history = useHistory();

  return (
    <div className="header__content">

    </div>
  )
}

export default Footer