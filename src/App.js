import React, {useEffect, useState} from 'react';
import './App.css';
import * as axios from "axios"

function App() {

    const [users, setUsers] = useState([]);

    const getUsers = () => {
        axios.get('http://localhost:7777/users')
            .then(res => res.data)
            .then(data => {
                setUsers(data)
            });
    }

    useEffect(() => {
        getUsers();
    }, []);

    const createUser = () => {
        axios.post('http://localhost:7777/users')
            .then(res => {
                getUsers();
            })
    }

    return (
        <div className="App">
            <div>
                <button onClick={createUser}> create user</button>
            </div>
            {users.map((u, i) => {
                return <div key={i}>{u.name}</div>
            })}
        </div>
    );
}

export default App;
