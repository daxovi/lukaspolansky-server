import React from 'react'
import { useEffect } from "react"

const Questions = (props) => {

    useEffect(() => {

    }, [])

    const Question = (props) => {

        return (
            <div className='question'>
                <form>
                    <div className='question__eval'>
                        <h3>{props.question}</h3>

                        <div className='rbuttons' onChange={props.onChange}>
                            <div className="rbutton">
                                <label>
                                    <input type="radio" id="1" value="1" />
                                    <div>naprosto souhlasím</div>
                                </label>

                            </div>
                            <div className="rbutton">
                            <label>
                                <input type="radio" id="2" value="2" />
                                </label>
                            </div>
                            <div className="rbutton">
                                <label>
                                    <input type="radio" id="3" value="3" />
                                    <div>nevím</div>
                                </label>
                            </div>
                            <div className="rbutton">
                            <label>
                                <input type="radio" id="4" value="4" />
                                </label>
                            </div>
                            <div className="rbutton">
                                <label>
                                    <input type="radio" id="5" value="5" />
                                    <div>naprosto nesouhlasím</div></label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    let result = [0];

    const onChangeValue = (event, number) => {
        result[number] = Number(event.target.value);
        console.log(event.target.value);
        console.log(result);
    }

    return (
        <div>
            <h2>Dotazník</h2>
            <p>Prosím odpovězde na pár otázek týkyjících se tohoto kurzu. Odpovídejte hodnocením tvrzení o 1 do 10, kdy ohodnocený 10 nejlépe odpovídá realitě a hodnocení 1 nejméně.</p>
            {props.text.map((text, i) => {
                return (
                    <Question question={text} onChange={(event) => {onChangeValue(event, i)}} />
                )
            })}
        </div>
    )
}

export default Questions