import { useEffect, useState } from "react"
import React from 'react'
import { useHistory } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import VideoStatus from "../components/VideoStatus";
import "./Course.css";
import Questions from "../components/Questions";

const Course = (props) => {
    const [userObject, setUserObject] = useState({});
    const [completed, setCompleted] = useState(false);
    const [lesson, setLesson] = useState();
    const [lessonNr, setLessonNr] = useState(0);
    const [lessonTitle, setLessonTitle] = useState("kurz");
    const history = useHistory();
    const [videoFile, setVideoFile] = useState("1a.mp4");
    const [showQuestions, setShowQuestions] = useState(false);
    const [nextBtnText, setNextBtnText] = useState("pokračovat");

    useEffect(() => {

        if (props.userObject) {
            setUserObject(props.userObject);

            const lessons = props.userObject.course;

            for (let [lessonIndex, lesson] of lessons.entries()) {
                if (lesson.completed === 0) {
                    setLesson(lesson);
                    setLessonNr(lessonIndex);
                    setVideoFile(lesson.file);
                    setLessonTitle(lesson.title);
                    if (lesson.file[1] === "c") {
                        setNextBtnText("dokončit");
                    }
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
            .then(() => {
                if (state === 2) {
                    window.location.reload()
                }
            });
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
            .then((response) => response.json());
    }

    const handleCompleted = () => {
        setCompleted(true);
        updateTime(lessonNr);
        updateLesson(lessonNr, 1);
    }
    const handleSkip = () => {
        console.log("kliknuto na preskocit")
        updateTime(lessonNr);
        updateLesson(lessonNr, 2);
        if (videoFile[1] === "c") {
            history.push("./dashboard");
            window.location.reload();
        }
    }
    const handleContinue = () => {
        window.location.reload();
    }

    const handleDone = () => {
        history.push("./dashboard");
        window.location.reload();
    }

    const Content = (props) => {
        if (!props.isQuestion) {
            return (
                <VideoPlayer handleEnd={handleCompleted} file={`/video/${videoFile}.mp4`} />
            )
        } else if (showQuestions) {
            return (
                <Questions />
            )
        } else {
            return (
                <VideoPlayer handleEnd={() => { handleCompleted(); setShowQuestions(true) }} file={`/video/${videoFile}.mp4`} />
            )
        }
    }

    const instructions = [
        "Přichystejte si podložku na cvičení.",
        "Pohodlně se posaďte a narovnejte se.",
        "Postavte se před monitor abyste mohli zpívat."
    ]

    return (
        <div>
            <h1>{lessonTitle}</h1>
            <Content isQuestion={videoFile[1] === "c"} />
            <VideoStatus
                instruction={instructions[videoFile[1].charCodeAt(0)-97]}
                completed={completed}
                handleDone={(videoFile[1] === "c") ? handleDone : handleContinue}
                handleSkip={handleSkip}
                nextBtnText={nextBtnText}
            />
        </div>
    )
}

export default Course