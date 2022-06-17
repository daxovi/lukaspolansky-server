import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";

const settings = require('../course.json');

const VideoStatus = (props) => {
    return (
        <div className="status">
            <p>{props.instruction}</p>
            <div className="controls">
                <button disabled={props.completed} onClick={props.handleSkip} className="btn btn--negative"><i className="bi bi-x-lg"></i>{settings.buttonSkip}</button>
                <button disabled={!props.completed} onClick={props.handleDone} className="btn"><i className="bi bi-check-lg"></i>{props.nextBtnText}</button>
            </div>
        </div>
    )
}

export default VideoStatus