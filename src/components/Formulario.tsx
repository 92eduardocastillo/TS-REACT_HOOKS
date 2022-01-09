import React from 'react'
import { useForm } from '../hooks/useForm';

interface formData {
    usuario: string;
    email: string;
}

export const Formulario = () => {


    const {formulario, handleChange, usuario , email} = useForm<formData>({
        usuario: '',
        email: ''
    })

    return (
        <form autoComplete='off'>

            <div className="mb-3">
                <label className='form-label'>Usuario</label>
                <input
                type='text'
                className='form-control'
                name="usuario"
                value={usuario}
                onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className='form-label'>Email</label>
                <input
                type='email'
                className='form-control'
                name="email"
                value={email}
                onChange={handleChange}
                />
            </div>

            

            <pre>{JSON.stringify(formulario)}</pre>

        </form>

        
    )
}
