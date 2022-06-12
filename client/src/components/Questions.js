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
                        <h3>Kurzy mi pomáhají zpívat lépe.</h3>

                        <div className='rbuttons'>
                            <div className="rbutton">
                                <label>
                                    <input type="radio" id="1" name="drone" value="dewey" />
                                    <div>naprosto souhlasím</div>
                                </label>

                            </div>
                            <div className="rbutton">
                            <label>
                                <input type="radio" id="2" name="drone" value="dewey" />
                                </label>
                            </div>
                            <div className="rbutton">
                                <label>
                                    <input type="radio" id="3" name="drone" value="dewey" />
                                    <div>nevím</div>
                                </label>
                            </div>
                            <div className="rbutton">
                            <label>
                                <input type="radio" id="4" name="drone" value="dewey" />
                                </label>
                            </div>
                            <div className="rbutton">
                                <label>
                                    <input type="radio" id="5" name="drone" value="dewey" />
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
            <Question />
            <Question />
            <Question />
            <Question />
        </div>
    )
}

export default Questions