import React from 'react'
import { Link } from 'react-router-dom'

const Examples = () => {
    return (
        <>
            <h4 className='text-center my-3'>Examples</h4>
            <ul className="list-group mx-auto w-50">
                <li className="list-group-item">
                    <Link className='tlink-offset-2 link-underline link-underline-opacity-25' to="/examples/1">1. Ejemplos Toast</Link>
                </li>
                <li className="list-group-item">
                    <Link className='tlink-offset-2 link-underline link-underline-opacity-25' to="/examples/2">2. Loading Users using toast.promise</Link>
                </li>
                <li className="list-group-item">
                    <Link className='tlink-offset-2 link-underline link-underline-opacity-25' to="/examples/3">3. Form Validation using "React Hook Form"</Link>
                </li>
                <li className="list-group-item">
                    <Link className='tlink-offset-2 link-underline link-underline-opacity-25' to="/examples/4">4. Form Validation using "React Hook Form" and Context</Link>
                </li>
                <li className="list-group-item">
                    <Link className='tlink-offset-2 link-underline link-underline-opacity-25' to="/examples/5">5. Form Validation using "React Hook Form" and Context and Input Controlleds</Link>
                </li>
                <li className="list-group-item">
                    <Link className='tlink-offset-2 link-underline link-underline-opacity-25' to="/examples/6">6. Loading Users using Context</Link>
                </li>
                <li className="list-group-item">
                    <Link className='tlink-offset-2 link-underline link-underline-opacity-25' to="/examples/7">7. Using ChartJS</Link>
                </li>
            </ul>
        </>
    )
}

export default Examples