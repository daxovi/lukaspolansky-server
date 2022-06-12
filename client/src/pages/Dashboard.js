import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

const Dashboard = (props) => {
    const [lessonTitle, setLessonTitle] = useState("Celý kurz jste dokončili, děkujeme.");
    const [preLessonTitle, setPreLessonTitle] = useState("kurz");
    const [preLessonDate, setPreLerssonDate] = useState("");
    const [preLessonStatus, setPreLessonStatus] = useState(0);

    const history = useHistory();

    const days = [
        'neděli',
        'pondělí',
        'úterý',
        'středu',
        'čtvrtek',
        'pátek',
        'sobotu'
    ]

    useEffect(() => {
        if (props.userObject) {

            const lessons = props.userObject.course;

            for (let [lessonIndex, lesson] of lessons.entries()) {
                if (lesson.completed === 0) {
                    if (lessons[lessonIndex - 1]) {
                        setPreLessonTitle(lessons[lessonIndex - 1].title);

                        let date = new Date(lessons[lessonIndex - 1].date);
                        setPreLerssonDate(`ve ${days[date.getDay()]} ${date.getDate()}. ${date.getMonth()}.`);

                        setPreLessonStatus(lessons[lessonIndex - 1].completed)
                    }
                    setLessonTitle(lesson.title);
                    break;
                }
            }
        }
    }, [])

    const PreStatus = (props) => {
        if (props.isPreStatus) {
            return (
                <div>Předchozí kurz: {preLessonTitle} jste {(preLessonStatus === 1) ? "dokončili" : "přeskočili"} {preLessonDate}</div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    return (
        <div>
            <h1>
                přehled
            </h1>
            <div>
                Následující kurz: {lessonTitle}
                <br />
                <PreStatus isPreStatus={preLessonStatus > 0} />
            </div>
            <br />
            <button className='btn btn-positive btn--big' onClick={() => { history.push("/course") }}><i className="bi bi-play"></i>pokračovat v další lekci</button>

        </div>
    )
}

export default Dashboard