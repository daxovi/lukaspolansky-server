import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

const Dashboard = (props) => {
    const [lessonTitle, setLessonTitle] = useState("Celý kurz jste dokončili, děkujeme.");
    const [lessonVideoFile, setLessonVideoFile] = useState("0");
    const [preLessonVideoFile, setPreLessonVideoFile] = useState("0");
    const [preLessonTitle, setPreLessonTitle] = useState("kurz");
    const [preLessonDate, setPreLessonDate] = useState("");
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
                        setPreLessonVideoFile(lessons[lessonIndex - 1].file)
                        let date = new Date(lessons[lessonIndex - 1].date);
                        setPreLessonDate(`ve ${days[date.getDay()]} ${date.getDate()}. ${date.getMonth()}.`);

                        setPreLessonStatus(lessons[lessonIndex - 1].completed)
                    }
                    setLessonVideoFile(lesson.file);
                    setLessonTitle(lesson.title);
                    break;
                }
            }
        }
    }, [])

    const PreStatus = (props) => {
        if (props.isPreStatus) {
            return (
                <div>
                <div className='dashboard dashboard__pre'>
                    <div className='dashboard__image'>
                        <img src={`/thumbnail/${preLessonVideoFile}.jpg`} alt="previous lesson thumbnail"></img>
                    </div>
                    <div>Předchozí kurz: <strong>{preLessonTitle}</strong> <br />jste {(preLessonStatus === 1) ? "dokončili" : "přeskočili"} {preLessonDate}</div>

                </div>
                </div>
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
            <div className='dashboard dashboard__next'>
                    <img src={`/thumbnail/${lessonVideoFile}.jpg`} alt="actual lesson thumbnail"></img>
                <div className='dashboard__next--textcol'>
                    <div>
                    {(lessonTitle === "Celý kurz jste dokončili, děkujeme.") ? "" : <span> Následující kurz: <br /></span>}
                    <strong>{lessonTitle}</strong> <br /><br />
                    {(lessonTitle === "Celý kurz jste dokončili, děkujeme.") ? "" : <span>Budete potřebovat asi 20 minut času, klidné místo, podložku na podlaze a dobrou náladu. <br /> <br /></span>}

                    </div>
                    <div>
                    {(lessonTitle === "Celý kurz jste dokončili, děkujeme.") ? "" : <button className='btn btn-positive btn--big' onClick={() => { history.push("/course") }}><i className="bi bi-play"></i>pokračovat</button>}

                    </div>

                </div>
            </div>


            <PreStatus isPreStatus={preLessonStatus > 0} />
            <br />


        </div>
    )
}

export default Dashboard