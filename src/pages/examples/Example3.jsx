import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Example3 = () => {

    const navigate = useNavigate();

    const { register: register1, handleSubmit: handleSubmitLogin, formState: { errors: errorsLogin } } = useForm()

    const onSubmitLogin = (data) => console.log(data);

    return (
        <div className='container'>
            <h4>3. Form Validation using "React Hook Form"</h4>
            <form className="my-3 mx-auto w-md-50 p-3" onSubmit={handleSubmitLogin(onSubmitLogin)}>
                <div className="form-group mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input className={'form-control ' + (errorsLogin.username ? 'is-invalid' : '')} type="email" id="username" {...register1('username', { required: true })} placeholder='john.doe@gmail.com' />
                    <div className="invalid-feedback">
                        Please provide a username.
                    </div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input className={'form-control ' + (errorsLogin.password ? 'is-invalid' : '')} type="password" id="password" {...register1('password', { required: true })} placeholder='********' />
                    <div className="invalid-feedback">
                        Please provide a password.
                    </div>
                </div>
                <button className="btn btn-primary btn-sm w-100 mb-3">Login</button>
            </form>
            <button className="btn btn-warning" onClick={() => navigate(-1)}>Regresar</button>
        </div>
    )
}

export default Example3