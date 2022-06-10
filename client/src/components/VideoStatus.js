import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";


const VideoStatus = (props) => {
    return (
        <div className="status">
            <p>Kurz {props.completed ? "je dokončený" : "probíhá"}</p>
            <div className="controls">
                <button disabled={props.completed} onClick={props.handleSkip} className="btn btn--negative"><i class="bi bi-x-lg"></i>Přeskočit video</button>
                <button disabled={!props.completed} onClick={props.handleDone} className="btn"><i class="bi bi-check-lg"></i>Pokračovat</button>
            </div>
        </div>
    )
}

export default VideoStatus