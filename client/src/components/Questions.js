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
                                    <input type="radio" id="1" value="1" name="question"/>
                                    <div>naprosto souhlasím</div>
                                </label>

                            </div>
                            <div className="rbutton">
                            <label>
                                <input type="radio" id="2" value="2" name="question"/>
                                </label>
                            </div>
                            <div className="rbutton">
                                <label>
                                    <input type="radio" id="3" value="3" name="question"/>
                                    <div>nevím</div>
                                </label>
                            </div>
                            <div className="rbutton">
                            <label>
                                <input type="radio" id="4" value="4" name="question"/>
                                </label>
                            </div>
                            <div className="rbutton">
                                <label>
                                    <input type="radio" id="5" value="5" name="question"/>
                                    <div>naprosto nesouhlasím</div></label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div>
            <h2>Dotazník</h2>
            <p>Prosím odpovězde na pár otázek týkyjících se tohoto kurzu. Odpovídejte hodnocením tvrzení o 1 do 10, kdy ohodnocený 10 nejlépe odpovídá realitě a hodnocení 1 nejméně.</p>
            {props.text.map((text, i) => {
                return (
                    <Question key={i} question={text} onChange={(event) => {props.onChangeValue(event, i)}} />
                )
            })}
        </div>
    )
}

export default Questions