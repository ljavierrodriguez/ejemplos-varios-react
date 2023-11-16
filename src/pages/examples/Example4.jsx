import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { Context } from '../../store/AppContext';
import { useNavigate } from 'react-router-dom';

const Example4 = () => {

    const navigate = useNavigate();

    const { store, actions } = useContext(Context);

    const { register, handleSubmit, formState: { errors } } = useForm()

    return (
        <div className='container'>
            <h4>4. Form Validation using "React Hook Form" and Context</h4>
            <form className="my-3 mx-auto w-md-50 p-3" onSubmit={handleSubmit(actions?.onSubmitRegister)}>
                <div className="form-group mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input className={'form-control ' + (errors.username ? 'is-invalid' : '')} type="email" id="username" {...register('username', { required: true })} placeholder='john.doe@gmail.com' />
                    <div className="invalid-feedback">
                        Please provide a username.
                    </div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input className={'form-control ' + (errors.password ? 'is-invalid' : '')} type="password" id="password" {...register('password', { required: true })} placeholder='********' />
                    <div className="invalid-feedback">
                        Please provide a password.
                    </div>
                </div>
                <button className="btn btn-primary btn-sm w-100 mb-3">Register</button>
            </form>
            <button className="btn btn-warning" onClick={() => navigate(-1)}>Regresar</button>
        </div>
    )
}

export default Example4