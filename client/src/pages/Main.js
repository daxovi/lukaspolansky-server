import React,{useState, useEffect} from 'react'
import Material from "../components/Material"
const Main = () => {
    const [materialy, setMaterialy] = useState([]);
    const [serverMessage, setServerMessage] = useState("");
    const [kliknutoUzivatelem, setKliknutoUzivatelem] = useState("");

    useEffect(() => {
        pridaniMaterialu();
    }, [])

    const pridaniMaterialu = async () => {
    setServerMessage("načítám data");
     const data = await fetch("http://localhost:5000/get-materials");
     const finalData = await data.json();
     const {msg, documents} = finalData;
     console.log(msg, documents)
    setMaterialy(documents);
    setServerMessage(msg);
    }
    const kliknuto = (material) => {
        setKliknutoUzivatelem(material);
    }
    return (
        <div>
            {
                materialy.map((material,index) => {
                    return(
                        <Material eventklik={kliknuto} key={index} name={material.name} cislovporadi={index}/>
                    )                 
                })
            }
            <div className="msg">{serverMessage}</div>
            {kliknutoUzivatelem}
        </div>
    )
}

export default Main
