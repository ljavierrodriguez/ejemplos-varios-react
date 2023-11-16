import React from 'react'
import { useNavigate } from 'react-router-dom';

const Example7 = () => {
    
    const navigate = useNavigate();

    return (
        <>
            <div className='container'>
                <h4>Soon</h4>
                <button className="btn btn-warning" onClick={() => navigate(-1)}>Regresar</button>
            </div>
        </>
    )
}

export default Example7