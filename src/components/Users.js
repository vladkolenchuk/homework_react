import {useEffect, useState} from "react";

function Users() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(user => user.json())
            .then(user => {
                setUsers(user);
            });
    }, []);

    return (
        <div>
            {
                users.map(user =>
                    <div key={user.id}>
                        <div>Name : {user.name}</div>
                        <div>Username: {user.username}</div>
                    </div>)
            }
        </div>
    );
}

export default Users;