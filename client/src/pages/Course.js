import { useEffect, useState, useRef } from "react"
import React from 'react'
import Footer from "../components/Footer";
import { loggedIn } from "../context/CheckLogin";
import { useHistory } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import VideoStatus from "../components/VideoStatus";
import "./Course.css";

const Course = (props) => {
    const [userObject, setUserObject] = useState({});
    const [completed, setCompleted] = useState(false);
    const [lesson, setLesson] = useState([]);
    const [lessonNr, setLessonNr] = useState([]);
    const history = useHistory();

    const videoFile = "/video/c1a.mp4";

    const updateLesson = (lessonIndex) => {
        const userId = userObject._id;
        console.log(userId);
        const url = `http://localhost:4000/save-user/${userObject._id}`;
        console.log(url);

        fetch(url, {
            method: 'PATCH',
            body: JSON.stringify({
                ["course." + lessonIndex + ".completed"]: true
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    const handleCompleted = () => { setCompleted(true); }
    const handleSkip = () => { console.log("kliknuto na preskocit") }
    const handleDone = () => {
        console.log("kliknuto na pokracovat");
        updateLesson(lessonNr);
        // setLessonNr(lessonNr + 1);
        window.location.reload();
    }

    return (
        <div>
            <h1>kurz</h1>
            <VideoPlayer handleEnd={handleCompleted} file={videoFile} />
            <VideoStatus completed={completed} handleDone={handleDone} handleSkip={handleSkip} />
        </div>
    )
}

export default Course