import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { loggedIn } from '../context/CheckLogin';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Dashboard = () => {
    const history = useHistory();
    const [userObject, setUserObject] = useState({});
    const [lesson, setLesson] = useState([]);

    useEffect(() => {
        loggedIn().then((value) => {
            if (!value) {
                history.push("./login");
            } else {
                setUserObject(value);

                for (let lesson of value.course) {
                    console.log(lesson);
                    if(lesson.completed == false) {
                        setLesson(lesson);
                        console.log(lesson.url);
                        break;
                    }
                }
            }
        })
     }, [])

    return (
        <div>
            <h1>
                Dashboard
            </h1>
            <div>
                Následující kurz: {lesson ? lesson.url : "nic"}
            </div>
            <Footer user={userObject.name} />

        </div>
    )
}

export default Dashboard