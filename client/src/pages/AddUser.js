import React, { useState } from 'react'

const AddUser = () => {
    const [vstupOdUzivatele, setVstupOdUzivatele] = useState("");

    const vlozeniDoDb = () => {
        fetch("http://localhost:4000/save-user",{
            method:"post",
            headers:{
                "Accept":"application/json",
                "Content-type":"application/json"
            },
            body:JSON.stringify({name:vstupOdUzivatele})
        }).then((data) => {
            return data.json();
        }).then((finalData) => {
            console.log(finalData.msg);
            setVstupOdUzivatele("");
        })
    }

    return(
        <div>
        <input type="text" value={vstupOdUzivatele} onInput={(e) => {
            setVstupOdUzivatele(e.target.value);
        }}/>
        <br/> <br/>
        <div className="btn" onClick={vlozeniDoDb}>Vložit uživatele</div>
    </div>
    )
}

export default AddUser
