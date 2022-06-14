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
                    <div className="user active">
                        <h3 onClick={(e) => console.log(e.target.parentElement.classList.toggle("active"))}>{user.name}</h3>

                        {user.course.map((lesson, i) => {
                            let date = new Date(lesson.date);
                            return (
                                <div className='user__lesson'>
                                    <div>{(lesson.completed === 1) ? <i className="bi bi-check-lg user__lesson--positive"></i> : ""}
                                        {(lesson.completed === 2) ? <i class="bi bi-x-lg user__lesson--negative"></i> : ""} {lesson.file} {lesson.title}</div>
                                    <div>
                                        {(lesson.eval.length > 1) ? <span>{lesson.eval.join(' ')}</span> : ""}
                                    </div>
                                    <div>
                                        {(lesson.completed > 0) ? <span>{date.toLocaleString()}</span> : "nedokončeno"}

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