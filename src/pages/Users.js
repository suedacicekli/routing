import React, { useState, useEffect } from 'react'
//import axios from 'axios';
import { Link } from "react-router-dom";

function Users() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .finally(() => setLoading(false));

    }, [])


    return (
        <div>
            <h2>Kullanıcılar</h2>
            {
                loading && <div >Yükleniyor..</div>
            }
            <ul className="user-list">
                {
                    users.map((user) => (
                        <li key={user.id} >
                            <Link to={`${user.id}`}>{user.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Users
