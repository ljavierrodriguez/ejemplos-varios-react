import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

const Example1 = () => {
    
    const navigate = useNavigate();

    const [message1, setMessage1] = useState("Hello World") //en
    const [message2, setMessage2] = useState("Hola Mundo") //es
    const [message3, setMessage3] = useState("Ola Mondo") //it
    const [message4, setMessage4] = useState("Olá mundo") //it


    const sendMessage = (type, message) => {
        toast(message, { type })
    }

    return (
        <div className='container'>
            <h2>Ejemplos</h2>
            <h4>1. Ejemplos Toast</h4>
            <div className='d-flex flex-column px-3 py-4 w-25'>
                <button className="btn btn-success btn-sm my-2" onClick={() => toast.success('Success Message!')}>Success</button>
                <button className="btn btn-info btn-sm my-2" onClick={() => toast.info('Info Message!')}>Info</button>
                <button className="btn btn-warning btn-sm my-2" onClick={() => toast.warning('Warning Message!')}>Warning</button>
                <button className="btn btn-danger btn-sm my-2" onClick={() => toast.error('Error Message!')}>Error</button>
            </div>
            <hr />
            <h4>1.1 Ejemplos Toast llamando a una funcion pasando el valor a imprimir</h4>
            <div className='d-flex flex-column px-3 py-4 w-25'>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={message1} onChange={(e) => setMessage1(e.target.value)} />
                    <button className="btn btn-success btn-sm" onClick={() => sendMessage("success", message1)}>
                        <i className="bi bi-send"></i>
                    </button>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={message2} onChange={(e) => setMessage2(e.target.value)} />
                    <button className="btn btn-info btn-sm" onClick={() => sendMessage("info", message2)}>
                        <i className="bi bi-send"></i>
                    </button>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={message3} onChange={(e) => setMessage3(e.target.value)} />
                    <button className="btn btn-danger btn-sm" onClick={() => sendMessage("error", message3)}>
                        <i className="bi bi-send"></i>
                    </button>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={message4} onChange={(e) => setMessage4(e.target.value)} />
                    <button className="btn btn-warning btn-sm" onClick={() => sendMessage("warning", message4)}>
                        <i className="bi bi-send"></i>
                    </button>
                </div>
            </div>
            <button className="btn btn-warning" onClick={() => navigate(-1)}>Regresar</button>
        </div>
    )
}

export default Example1