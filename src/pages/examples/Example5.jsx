import React, { useContext, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { Context } from '../../store/AppContext';
import { useNavigate } from 'react-router-dom';

const Example5 = () => {

    const navigate = useNavigate();

    const { store, actions } = useContext(Context);

    const { register: register3, handleSubmit: handleSubmitOther, formState: { errors: errorsOther }, control, reset } = useForm({
        defaultValues: store.seletedUser
    })

    const handleReset = () => {
        reset();
    }

    return (
        <div className='container'>
            <h4>5. Form Validation using "React Hook Form" and Context and Input Controlleds</h4>
            <form className="my-3 mx-auto w-md-50 p-3" onSubmit={handleSubmitOther(actions?.onSubmitOther)}>
                <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: 'Please provide a name.' }}
                        render={({ field }) => (
                            <input {...field} className={'form-control ' + (errorsOther.name ? 'is-invalid' : '')} type="text" placeholder="John Doe" />
                        )}
                    />
                    <div className="invalid-feedback">
                        Please provide a name.
                    </div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <Controller
                        name="username"
                        control={control}
                        rules={{ required: 'Please provide a username.' }}
                        render={({ field }) => (
                            <input {...field} className={'form-control ' + (errorsOther.username ? 'is-invalid' : '')} type="email" placeholder="john.doe@gmail.com" />
                        )}
                    />
                    <div className="invalid-feedback">
                        Please provide a username.
                    </div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: 'Please provide a password.' }}
                        render={({ field }) => (
                            <input {...field} className={'form-control ' + (errorsOther.password ? 'is-invalid' : '')} type="password" placeholder="********" />
                        )}
                    />
                    <div className="invalid-feedback">
                        Please provide a password.
                    </div>
                </div>
                <button className="btn btn-warning btn-sm mb-3 mx-1">Update</button>
                <button type='reset' className="btn btn-secondary btn-sm mb-3 mx-1" onClick={handleReset}>Cancel</button>
            </form>
            <button className="btn btn-warning" onClick={() => navigate(-1)}>Regresar</button>
        </div>
    )
}

export default Example5