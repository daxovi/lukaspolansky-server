import React, { useState } from 'react'
const Menu = () => {

    const [user] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("user");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });

    return (
        <div class="menu">
            <div>Přihlášený uživatel {user}</div>
        </div>
    )
}

export default Menu
