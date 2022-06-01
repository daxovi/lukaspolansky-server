import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { loggedIn } from '../context/CheckLogin.js';

const Login = () => {
    const [users, setUsers] = useState([]);
    const [serverMessage, setServerMessage] = useState("");
    const [vstupOdUzivatele, setVstupOdUzivatele] = useState("");
    const [loginMessage, setLoginMessage] = useState("");

    const history = useHistory();

    loggedIn().then((value) => {
        if (value) {
            history.push("./dashboard");
        }
    });

    useEffect(() => {
        getUsers();
    }, []);
    

    const getUsers = async () => {
        setServerMessage("načítám data");
        const data = await fetch("http://localhost:4000/get-users");
        const finalData = await data.json();
        const { msg, documents } = finalData;
        console.log(msg, documents)
        setUsers(documents);
        setServerMessage(msg);
    }

    const checkUser = () => {
        users.forEach((user) => {
            if (user.name === vstupOdUzivatele) {
                localStorage.setItem("user", JSON.stringify(user.name));
                setLoginMessage("Uživatel je úspěšně přihlášený");
                history.push("/dashboard");
            }
        })
        setLoginMessage("Uživatelské jméno je neplatné");
        setTimeout(() => {
            setVstupOdUzivatele("");
        }, 2000);        
    }

    return (
        <div>
            <div>
                <form>
                <input type="text" value={vstupOdUzivatele} onInput={(e) => {
                    setVstupOdUzivatele(e.target.value);
                }} />
                <br /> <br />
                <button type="submit" className='btn btn-positive' onClick={checkUser}>Přihlásit uživatele</button>
                </form>
            </div>
            <p>{loginMessage}</p>
        </div>
    )
}

export default Login
