import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

const Example2 = () => {

    const navigate = useNavigate();

    const [users, setUsers] = useState(null);

    useEffect(() => {
        getUsers()
    }, [])


    const getUsers = async () => {

        try {

            const response = await toast.promise(
                fetch('https://jsonplaceholder.typicode.com/users'),
                {
                    pending: 'Promise is pending',
                    success: 'Promise resolved 👌',
                    error: 'Promise rejected 🤯'
                }
            );
            const data = await response.json();
            setUsers(data)

        } catch (error) {

        }

    }

    return (
        <div className='container'>
            <h4>2. Loading Users using toast.promise</h4>
            <button className='btn btn-primary btn-sm my-2' onClick={() => getUsers()}>Load Users Data</button>
            <ul className='list-group mb-5 mx-5'>
                {
                    !!users &&
                    users.map((user) => {
                        return (
                            <li key={user.id} className='list-group-item list-group-item-action'>
                                {user.name}
                            </li>
                        )
                    })
                }
            </ul>
            <button className="btn btn-warning" onClick={() => navigate(-1)}>Regresar</button>
        </div>
    )
}

export default Example2