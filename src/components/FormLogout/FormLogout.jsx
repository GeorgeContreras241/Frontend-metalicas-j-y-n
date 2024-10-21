import React, { useEffect, useState } from 'react'
import "./formLogout.css"
import { useForm } from "../../hooks/useForm.js"
import { Exit } from "../Exit.jsx"
import { LightMode } from "../LightMode.jsx"
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";


import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'

const initialInputs = {
    username: "",
    password: ""
}
export const FormLogout = () => {
    const { forms, handleInputForm } = useForm(initialInputs)
    const [type, setType] = useState('password')
    const navigate = useNavigate()
    const {signin,isAuthenticated,} = useAuth()

    useEffect(() => {
      if (isAuthenticated) {
        navigate("/dashboard")
      }
    }, [isAuthenticated])
    
    const handleForm = async (event) => {
        event.preventDefault()
        forms.username = forms.username.trim()
        signin(forms)
        console.log(isAuthenticated)
    }

    const handleToggleType = () => {
        setType(type === "password" ? "text" : "password")
    }
    return (
        <div className='container-page'>
            <div className='container-exit'>
                <div className='container-regresar'><Exit></Exit></div>
                <LightMode></LightMode>
            </div>
            <div className='border'>
                <section>
                    <div className='section'>
                        <h3>Iniciar Sesión</h3>
                        <p>Bienvenido de nuevo. Por favor, introduce tus credenciales para acceder a tu cuenta.</p>
                    </div>
                    <form onSubmit={handleForm}>
                        <label className='label'>
                            <input
                                autoComplete='off'
                                className='input'
                                placeholder=' '
                                type="text"
                                name='username'
                                onChange={handleInputForm}
                                value={forms.username}
                                required />
                            <span className='label-name'>Ingresa tu Usuario</span>
                        </label>
                        <label className='label'>
                            <input
                                placeholder=' '
                                className='input'
                                type={type}
                                name='password'
                                onChange={handleInputForm}
                                value={forms.password}

                            ></input>
                            <span className='label-name'>Ingresa tu Conreaseña</span>
                            <button className='container-view' type='button' onClick={handleToggleType}>{type === "text" ? <FaRegEye fontSize="18px" /> : <FaRegEyeSlash fontSize="18px" />}</button>
                        </label>
                        <div className='container-boton'>
                            <button className='form-button' type="submit">Iniciar Seccion</button>
                        </div>

                    </form>
                </section>
            </div>

        </div>
    )
}
/*boton de mostrar contrase;a no esta funcionanado bien ///corregido
2. que no acepte datos basios///corregido
3. usar algo para notificar tipo notificaciones//preparado
4.crear hooks para usar en los formularios // listo
5.crear ruta para volvel a pagina web//listo
6. crear estilos css

*/ 