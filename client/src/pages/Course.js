import { useEffect, useState } from "react"
import React from 'react'
import { useHistory } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import VideoStatus from "../components/VideoStatus";
import "./Course.css";
import Questions from "../components/Questions";

const settings = require('../course.json');

const Course = (props) => {
    const [userObject, setUserObject] = useState({});
    const [completed, setCompleted] = useState(false);
    const [lessonNr, setLessonNr] = useState(0);
    const [lessonTitle, setLessonTitle] = useState("");
    const history = useHistory();
    const [videoFile, setVideoFile] = useState("0");
    const [showQuestions, setShowQuestions] = useState(false);
    const [nextBtnText, setNextBtnText] = useState(settings.buttonNext);

    useEffect(() => {
        if (props.userObject) {
            setUserObject(props.userObject);

            const lessons = props.userObject.course;
            let endControl = true;
            for (let [lessonIndex, lesson] of lessons.entries()) {
                if (lesson.completed === 0) {
                    endControl = false;
                    setLessonNr(lessonIndex);
                    setVideoFile(lesson.file);
                    setLessonTitle(lesson.title);
                    if (lesson.file[1] === settings.lastVideoOfLesson) {
                        setNextBtnText(settings.buttonDone);
                    }
                    break;
                }
            }
            if (endControl) {
                history.push("./dashboard");
            }
        }
    }, [])

    // aktualizace databáze
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

    const updateEval = (lessonIndex, result) => {
        let cleanResult;
        cleanResult = Array.from(result, v => v === undefined ? 0 : v);

        const userId = userObject._id;
        const url = `http://localhost:4000/save-user/${userId}`;

        fetch(url, {
            method: 'PATCH',
            body: JSON.stringify({
                ["course." + lessonIndex + ".eval"]: cleanResult
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json());
    }

    let result = [0];

    // Dokončené přehrání videa
    const handleCompleted = () => {
        setCompleted(true);
        updateTime(lessonNr);
        updateLesson(lessonNr, 1);
    }

    // Stitknutí tlačítka přeskočit
    const handleSkip = () => {
        updateTime(lessonNr);
        updateLesson(lessonNr, 2);
        if (videoFile[videoFile.length - 1] === settings.lastVideoOfLesson) {
            history.push("./dashboard");
            window.location.reload();
        }
    }

    // Stisknutí tlačítka pokračovat
    const handleContinue = () => {
        updateEval(lessonNr, result);
        window.location.reload();
    }

    // Stitknutí tlačítka dokončit
    const handleDone = () => {
        updateEval(lessonNr, result);
        history.push("./dashboard");
        window.location.reload();
    }

    // Rozdělení na videa s otázkami a bez otázek
    const Content = (props) => {
        if (!props.isQuestion) {
            return (
                <VideoPlayer handleEnd={handleCompleted} file={`/video/${videoFile}.mp4`} />
            )
        } else if (showQuestions) {
            return (
                <Questions text={props.questions} onChangeValue={onChangeValue} />
            )
        } else {
            return (
                <VideoPlayer handleEnd={() => { handleCompleted(); setShowQuestions(true) }} file={`/video/${videoFile}.mp4`} />
            )
        }
    }

    // textové instrukce
    const instructions = settings.instructions;

    // texty otázek
    const questionTexts = settings.questionTexts;

    // sbírání dat z radiobutton otázek
    const onChangeValue = (event, number) => {
        result[number] = Number(event.target.value);
        console.log(event.target.value);
        console.log(result);
        updateEval(lessonNr, result);
    }
    
    return (
        <div>
            <h1>{lessonTitle}</h1>
            <Content isQuestion={settings.questionParts.includes(videoFile[1])} questions={questionTexts} />
            <VideoStatus
                instruction={(instructions[videoFile[videoFile.length - 1]?.charCodeAt(0)-97]) ? instructions[videoFile[videoFile.length - 1].charCodeAt(0)-97] : <span></span> }
                completed={completed}
                handleDone={(videoFile[videoFile.length - 1] === settings.lastVideoOfLesson) ? handleDone : handleContinue}
                handleSkip={handleSkip}
                nextBtnText={nextBtnText}
            />
        </div>
    )
}

export default Course