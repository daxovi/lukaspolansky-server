import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { loggedIn } from '../context/CheckLogin';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Dashboard = () => {
    const history = useHistory();
    const [userObject, setUserObject] = useState({});
    const [lesson, setLesson] = useState([]);

    return (
        <div>
            <h1>
                přehled
            </h1>
            <div>
                Následující kurz: {lesson ? lesson.url : "nic"}
            </div>
        </div>
    )
}

export default Dashboard