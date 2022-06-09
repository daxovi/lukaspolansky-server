import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

const Dashboard = (props) => {
    const history = useHistory();
    const [userObject, setUserObject] = useState({});
    const [lesson, setLesson] = useState([]);
    const [lessonTitle, setLessonTitle] = useState("test");
    const [preLessonTitle, setPreLessonTitle] = useState("kurz");
    const [preLessonDate, setPreLerssonDate] = useState("");
    const [preLessonStatus, setPreLessonStatus] = useState(1);

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
        console.log("neni tam");
        if (props.userObject) {
            console.log("je tam");
            setUserObject(props.userObject);

            const lessons = props.userObject.course;

            for (let [lessonIndex, lesson] of lessons.entries()) {
                if (lesson.completed == 0) {
                    if (lessons[lessonIndex - 1]) {
                        setPreLessonTitle(lessons[lessonIndex - 1].title);
                        
                        let date = new Date(lessons[lessonIndex - 1].date);
                        setPreLerssonDate(`ve ${days[date.getDay()]} ${date.getDate()}. ${date.getMonth()}.`);

                        setPreLessonStatus(lessons[lessonIndex - 1].completed)
                    }
                    console.log(lesson.title);
                    setLesson(lesson);
                    setLessonTitle(lesson.title);
                    break;
                }
            }
        }
    }, [])

    return (
        <div>
            <h1>
                přehled
            </h1>
            <div>
                Následující kurz: {lessonTitle}
                <br />
                Předchozí kurz: {preLessonTitle} jste {(preLessonStatus == 1) ? "dokončili" : "přeskočili"} {preLessonDate}
                        </div>
        </div>
    )
}

export default Dashboard