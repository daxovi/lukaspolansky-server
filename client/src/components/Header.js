import React from 'react'
import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Header = (props) => {
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        localStorage.setItem("user", JSON.stringify(""));
        window.location.reload();
    }

    const Button = (props) => {
        let pathname = location.pathname;
        if (pathname === props.path) {
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

    const Menu = (props) => {
        if (props.userObject) {
            return (
                <ul>
                    <li className="header__avatar">{props.userObject.name[0]}</li>
                    <li className='header__name'>{props.userObject.name}</li>
                    <li><Button title="přehled" path="/dashboard" /></li>
                    <li><Button title="pokračovat v kurzu" path="/course" /></li>
                    <li><Button title="o projektu" path="/" /></li>
                </ul>
            )
        } else {
            return (
                <ul>
                    <li className="header__avatar"><i className="bi bi-music-note"></i></li>
                    <li className='header__name'>lukiho online kurzy zpěvu</li>
                    <li><Button title="o projektu" path="/" /></li>
                </ul>
            )
        }
    }

    const Login = (props) => {
        if (props.userObject) {
            return (
                <button onClick={() => logout()} className="header__btn header__btn--negative"><i className="bi bi-box-arrow-left"></i>odhlásit se</button>
            )
        } else {
            return (
                <button onClick={() => history.push("./login")} className="header__btn"><i className="bi bi-box-arrow-in-right"></i>přihlásit se</button>
            )
        }
    }

    return (
        <div className="header">
            <div className="header__content">
                <nav>
                    <Menu userObject={props.userObject ? props.userObject : false} />
                    <ul>
                        <li><Login userObject={props.userObject ? true : false} /></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header