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
    const [lesson, setLesson] = useState();
    const [lessonNr, setLessonNr] = useState(0);
    const history = useHistory();
    const [videoFile, setVideoFile] = useState("1a.mp4");

    useEffect(() => {

        if (props.userObject) {
            setUserObject(props.userObject);

            const lessons = props.userObject.course;
                
                for (let [lessonIndex, lesson] of lessons.entries()) {
                    if (lesson.completed == 0) {
                        console.log(lesson.title);
                        setLesson(lesson);
                        setLessonNr(lessonIndex);
                        setVideoFile(lesson.file);
                        break;
                    }
                } 
        }
    }, [])

    const updateLesson = (lessonIndex, state) => {
        const userId = userObject._id;
        const url = `http://localhost:4000/save-user/${userId}`;

        fetch(url, {
            method: 'PATCH',
            body: JSON.stringify({
                ["course." + lessonIndex + ".completed"]: state
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log({json}));
    }

    const updateTime = (lessonIndex) => {
        const userId = userObject._id;
        const url = `http://localhost:4000/save-user/${userId}`;

        fetch(url, {
            method: 'PATCH',
            body: JSON.stringify({
                ["course." + lessonIndex + ".date"]: new Date
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log({json}));
    }

    const handleCompleted = () => { setCompleted(true); }
    const handleSkip = () => {
        console.log("kliknuto na preskocit")
        updateLesson(lessonNr, 2);
        updateTime(lessonNr);
        window.location.reload();
    }
    const handleDone = () => {
        console.log("kliknuto na pokracovat");
        updateLesson(lessonNr, 1);
        updateTime(lessonNr);
        window.location.reload();
    }

    return (
        <div>
            <h1>kurz</h1>
            <VideoPlayer handleEnd={handleCompleted} file={`/video/${videoFile}.mp4`} />
            <VideoStatus completed={completed} handleDone={handleDone} handleSkip={handleSkip} />
        </div>
    )
}

export default Course