import { useEffect, useState, useRef } from "react"
import React from 'react'
import Footer from "../components/Footer";
import { loggedIn } from "../context/CheckLogin";
import { useHistory } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import VideoStatus from "../components/VideoStatus";
import "./Course.css";

const Course = () => {
    const [userObject, setUserObject] = useState({});
    const [completed, setCompleted] = useState(false);
    const history = useHistory();

    const videoFile = "/video/c1a.mp4";

    useEffect(() => {
        loggedIn().then((value) => {
            value ? setUserObject(value) : history.push("./login")
        });
    }, []);

    const handleCompleted = () => { setCompleted(true); }
    const handleSkip = () => { console.log("kliknuto na preskocit") }
    const handleDone = () => { console.log("kliknuto na pokracovat") }

    return (
        <div>
            <h1>Course</h1>
            <VideoPlayer handleEnd={handleCompleted} file={videoFile} />
            <VideoStatus completed={completed} handleDone={handleDone} handleSkip={handleSkip} />
            <Footer user={userObject.name} />
        </div>
    )
}

export default Course