import React, { useRef } from 'react'
import ReactPlayer from 'react-player'
import "./VideoPlayer.css"

const VideoPlayer = (props) => {
    const player = useRef();

    return (
        <div className='player-wrapper'>
            <ReactPlayer
                ref={player}
                className='react-player'
                url={props.file}
                width='100%'
                height='100%'
                onEnded={props.handleEnd}
                controls="true"
            />
        </div>
    )
}

export default VideoPlayer