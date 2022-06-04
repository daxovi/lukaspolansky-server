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
            <div>
                <form>
                <input type="text" value={vstupOdUzivatele} onInput={(e) => {
                    setVstupOdUzivatele(e.target.value);
                }} />
                <br /> <br />
                <button type="submit" className='btn btn-positive' onClick={checkUser}>Přihlásit uživatele</button>
                </form>
            </div>
        </div>
    )
}

export default Login
