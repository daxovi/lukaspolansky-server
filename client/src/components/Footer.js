import React from 'react'
import { useHistory } from 'react-router-dom'

const Footer = (props) => {
    const user = props.user
    const history = useHistory();

  return (
    <div>
        <div>Je přihlášený uživatel {user}!</div>
        <br></br>
        <button className='btn' onClick={() => {
                localStorage.setItem("user", JSON.stringify(""));
                history.push("/");
            }}>Odhlásit se</button>
            <button className='btn btn-minimal'>poslat připomínky</button>
    </div>
  )
}

export default Footer