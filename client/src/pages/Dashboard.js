import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { loggedIn } from '../context/CheckLogin';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Dashboard = () => {
    const history = useHistory();
    const [userObject, setUserObject] = useState({});
    const [course, setCourse] = useState([]);

    useEffect(() => { 
        loggedIn().then((value) => {
            if (!value) {
                history.push("./login");
            } else {
                setUserObject(value);
                setCourse(value.course);
                console.log(value.course[0].url);
            }
        })
     }, [])

    return (
        <div>
            <h1>
                přehled
            </h1>
            <div>
                Následující kurz: {userObject.course ? userObject.course[0].url : "nic"}
            </div>
            <Footer user={userObject.name} />

        </div>
    )
}

export default Dashboard