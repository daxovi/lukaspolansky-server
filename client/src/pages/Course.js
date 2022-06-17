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
    const [lessonNr, setLessonNr] = useState(0);
    const [lessonTitle, setLessonTitle] = useState("Ukončení kurzu");
    const history = useHistory();
    const [videoFile, setVideoFile] = useState("0");
    const [showQuestions, setShowQuestions] = useState(false);
    const [nextBtnText, setNextBtnText] = useState("pokračovat");

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
                    if (lesson.file[1] === "c") {
                        setNextBtnText("dokončit");
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
        console.log("kliknuto na preskocit")
        updateTime(lessonNr);
        updateLesson(lessonNr, 2);
        if (videoFile[1] === "c") {
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
    const instructions = [
        "Přichystejte si podložku na cvičení.",
        "Pohodlně se posaďte a narovnejte se.",
        "Postavte se před monitor abyste mohli zpívat."
    ]

    // texty otázek
    const questionTexts = [
        "První kurzy mi pomáhají zpívat lépe.",
        "Prostřední lekce mi pomáhají zpívat lépe.",
        "Nakonec je to docela fajn.",
        "jsem zvědavý co se nakonec stane",
        "Mám rád svého učitele",
        "Nechci online kurzy"
    ]

    // sbírání dat z radiobutton otázek
    const onChangeValue = (event, number) => {
        result[number] = Number(event.target.value);
        console.log(event.target.value);
        console.log(result);
    }
    
    return (
        <div>
            <h1>{lessonTitle}</h1>
            <Content isQuestion={videoFile[1] === "c"} questions={questionTexts} />
            <VideoStatus
                instruction={(instructions[videoFile[1]?.charCodeAt(0)-97]) ? instructions[videoFile[1].charCodeAt(0)-97] : "Děkujeme" }
                completed={completed}
                handleDone={(videoFile[1] === "c") ? handleDone : handleContinue}
                handleSkip={handleSkip}
                nextBtnText={nextBtnText}
            />
        </div>
    )
}

export default Course