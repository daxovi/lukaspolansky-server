import React from 'react'

const VideoStatus = (props) => {
    return (
        <div className="status">
            <p>Kurz {props.completed ? "je dokončený" : "probíhá"}</p>
            <div className="controls">
                <button disabled={props.completed} onClick={props.handleSkip} className="btn">Přeskočit video</button>
                <button disabled={!props.completed} onClick={props.handleDone} className="btn btn-positive">Pokračovat</button>
            </div>
        </div>
    )
}

export default VideoStatus