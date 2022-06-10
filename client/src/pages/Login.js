import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { loggedIn } from '../context/CheckLogin.js';

const Login = () => {
    const [vstupOdUzivatele, setVstupOdUzivatele] = useState("");
    const history = useHistory();

    // Funkce nastaví hodnotu místního úložiště user
    // potom useEffect zkontroluje jestli se shoduje se jménem z databáze
    // pokud ano, přesměruje stránku na dashboard
    const checkUser = () => {
        console.log(vstupOdUzivatele);
        localStorage.setItem("user", JSON.stringify(vstupOdUzivatele));
    }

    return (
        <div>
            <h1>přihlášení</h1>
            <div className="login">
                <form className='login__form'>
                    <input placeholder='uživatelské jméno' type="text" value={vstupOdUzivatele} onInput={(e) => {
                        setVstupOdUzivatele(e.target.value);
                    }} />
                    <button type="submit" className='btn btn-positive' onClick={checkUser}><i class="bi bi-box-arrow-in-right"></i>přihlásit se</button>
                </form>
                <div className="login__warning">
                    Pro pokračování ke kurzu se musíte přihlásit. Pokud nemáte přihlašovací jméno, požádejte o něj na adrese <a href="mailto:lukas@lukaspolansky.cz">lukas@lukaspolansky.cz</a>.
                </div>
                </div>
        </div>
    )
}

export default Login
