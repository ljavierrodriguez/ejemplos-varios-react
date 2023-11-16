import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../../store/AppContext';

const Example6 = () => {

    const navigate = useNavigate();

    const { store, actions } = useContext(Context)

    return (
        <div className='container'>
            <h4>6. Loading Users using Context</h4>
            <button className='btn btn-primary btn-sm my-2' onClick={() => actions.getUsers()}>Load Users Data</button>
            <ul className='list-group mb-5 mx-5'>
                {
                    !!store.users &&
                    store.users.map((user) => {
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

export default Example6