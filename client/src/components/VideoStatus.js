import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";


const VideoStatus = (props) => {
    return (
        <div className="status">
            <p>{props.instruction}</p>
            <div className="controls">
                <button disabled={props.completed} onClick={props.handleSkip} className="btn btn--negative"><i class="bi bi-x-lg"></i>Přeskočit</button>
                <button disabled={!props.completed} onClick={props.handleDone} className="btn"><i class="bi bi-check-lg"></i>{props.nextBtnText}</button>
            </div>
        </div>
    )
}

export default VideoStatus