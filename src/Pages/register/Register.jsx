import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { useAuth } from '../../context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'
const initialInputs = {
    username: "",
    password: ""
}
export const Register = () => {
    const {signup, isAuthenticated} = useAuth()
    const {forms ,handleInputForm} = useForm(initialInputs)
    const navigate = useNavigate()
    
    
    const onSubmit = async () => {
        signup(forms)   
    }
    useEffect(() => {
        if (isAuthenticated) navigate('/dashboard')
      }, [isAuthenticated])
    return (
        <form onSubmit={onSubmit}>
            <input type="text"
                placeholder='username'
                name='username'
                onChange={handleInputForm}
                value={forms.username}
                 />
            <input type="text"
                placeholder='password'
                name='password'
                value={forms.password}
                onChange={handleInputForm} />
            <button type='submit'>registrar</button>
        </form>
    )
}
