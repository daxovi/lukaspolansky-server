import React from 'react'
import { useHistory } from "react-router-dom";

const Main = () => {
    const history = useHistory();

    return (
        <div>
            <h1>vítejte u Lukiho</h1>
            <p>Vítr skoro nefouká a tak by se na první pohled mohlo zdát, že se balónky snad vůbec nepohybují. Jenom tak klidně levitují ve vzduchu. Jelikož slunce jasně září a na obloze byste od východu k západu hledali mráček marně, balónky působí jako jakási fata morgána uprostřed pouště. Zkrátka široko daleko nikde nic, jen zelenkavá tráva, jasně modrá obloha a tři křiklavě barevné pouťové balónky, které se téměř nepozorovatelně pohupují ani ne moc vysoko, ani moc nízko nad zemí. Kdyby pod balónky nebyla sytě zelenkavá tráva, ale třeba suchá silnice či beton, možná by bylo vidět jejich barevné stíny - to jak přes poloprůsvitné barevné balónky prochází ostré sluneční paprsky.</p>
            <br />
            <div>
                <button className='btn btn-positive btn--big' onClick={() => { history.push("/login") }}><i className="bi bi-box-arrow-in-right"></i>přihlásit se</button>
                <button className="btn btn-positive btn--big"><i className="bi bi-person-plus"></i>požádat o přístupový kód</button>
            </div>
        </div>
    )
}

export default Main
