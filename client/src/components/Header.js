import React from 'react'
import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useContext } from 'react';

const Header = (props) => {
    const history = useHistory();
    const location = useLocation();

  const logout = () => {
        localStorage.setItem("user", JSON.stringify(""));
        window.location.reload();
  }

  const Button = (props) => {
    let pathname = location.pathname;
      if (pathname == props.path) {
          return (
            <button className="header__btn header__btn--highlight">
                {props.title}
            </button>
          )
      } else {
        return (
            <button onClick={() => { history.push(`${props.path}`) }} className="header__btn">
                {props.title}
            </button>
          )
      }
  }

    return (
        <div className="header">
            <div className="header__content">
                <nav>
                    <ul>
                        <li className="header__avatar">{props.userObject ? props.userObject.name[0] : " "}</li>
                        <li className='header__name'>{props.userObject ? props.userObject.name : " "}</li>
                        <li><Button title="přehled" path="/dashboard" /></li>
                        <li><Button title="pokračovat v kurzu" path="/course" /></li>
                        <li><Button title="o projektu" path="/" /></li>

                    </ul>
                    <ul>
                        <li><button onClick={() => {props.userObject ? logout() : history.push("./login") }} className="header__btn header__btn--negative">{props.userObject ? "odhlásit se" : "přihlásit se" }</button></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header