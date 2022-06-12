import React, { useState } from 'react'
import { useEffect } from 'react'

var controller = new AbortController();
var signal = controller.signal;

const Admin = (props) => {
    const [users, setUsers] = useState();

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const data = await fetch("http://localhost:4000/get-users", { signal });
        const finalData = await data.json();
        const { documents } = finalData;
        setUsers(documents);
        console.log(documents);
    }

    return (
        <div>
            <h1>
                administrace
            </h1>
            {users?.map((user, i) => {
                return (
                <div className="user">
                    <h3>{user.name}</h3>
                    
                    {user.course.map((lesson, i) => {
                        let date = new Date(lesson.date);
                        return (
                            <div className='user__lesson'>
                                <div>{lesson.file} {lesson.title}</div>
                                <div>
                                    {(lesson.completed === 0) ? "nedokončeno" : ""}
                                    {(lesson.completed === 1) ? <span><i className="bi bi-check-lg"></i>{date.toLocaleString() }</span> : ""} 
                                    {(lesson.completed === 2) ? <span><i class="bi bi-x-lg"></i>{date.toLocaleString() }</span> : ""} 

                                </div>
                            </div>
                        )
                    })}
                    <br />
                </div>
                )
            })}
        </div>
    )
}

export default Admin