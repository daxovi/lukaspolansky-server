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
    const [lesson, setLesson] = useState([]);
    const [lessonNr, setLessonNr] = useState([]);
    const history = useHistory();

    const videoFile = "/video/c1a.mp4";

    useEffect(() => {
        loggedIn().then((value) => {
            if (!value) {
                history.push("./login");
            } else {
                setUserObject(value);

                for (let [index, lesson] of value.course.entries()) {
                    console.log(lesson);
                    if (lesson.completed == false) {
                        setLesson(lesson);
                        setLessonNr(index);
                        break;
                    }
                }
            }
        });
    }, []);

    const updateLesson = (lessonIndex) => {
        const userId = userObject._id;
        console.log(userId);
        const url = `http://localhost:4000/save-user/${userObject._id}`;
        console.log(url);

        fetch(url, {
            method: 'PATCH',
            body: JSON.stringify({
                "course.0.completed": true,
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
        updateLesson(0);
    }

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