import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import './Contact.css'
import { useForm } from "../../hooks/useForm.js"
const initialInput = {
    name: "",
    email: "",
    message: ""
}
export const Contact = () => {
    
    const {forms,handleInputForm} = useForm(initialInput)

    const handleSend = (e) =>{
        e.preventDefault()
        console.log(forms)
    }
    return (
        <>
            <div className='container-flex'>
                <h2 className='title'>Contactanos</h2>
                <div className='container-one'>
                    <p>Mediante este formulario podras enviar para que nuestra jente te contacte</p>
                    <h4>Como funciona?</h4>
                    <p>no te preocupes te explicaremso como funciona
                        deberas dejar tus siguientes datos
                    </p>
                    <ol>
                        <li>Nombres y Apellidos</li>
                        <li>Correo Electronico</li>
                        <li>Tu duda</li>
                    </ol>
                </div>
                <div className='container-two'>
                    <p>nosotros te contactaremos lo mas pronto pocible para responder tus dudas</p>
                    <p className='container-wp'>Nuestro WhatsApp</p>
                    <button className='container-button-wp'><FaWhatsapp fontSize={28} /></button>
                </div>
            </div>
            <section className="contact-section">
                <div className="contact-container">
                    <div className="contact-info">
                        <h2 className="contact-title">¿Contáctanos por Aquí?</h2>
                        <p className="contact-description">
                            ¿Tiene alguna pregunta o quiere trabajar juntos? Complete el formulario y nos comunicaremos con usted lo antes posible.
                        </p>
                    </div>
                    <div className="contact-form-card">
                        <form className="contact-form" onSubmit={handleSend}>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="name">Nombres y Apellidos</label>
                                    <input
                                        className="form-input"
                                        name="name"
                                        placeholder="Dijita tu nombre y apellido"
                                        type="text"
                                        value={forms.name}
                                        onChange={handleInputForm}
                                        autoComplete='off'
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="email">Correo Electronico</label>
                                    <input
                                        className="form-input"
                                        name="email"
                                        placeholder="Didita tu correo"
                                        type="email"
                                        value={forms.email}
                                        onChange={handleInputForm}
                                        autoComplete='off'
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="message">Mensaje</label>
                                <textarea
                                    className="form-textarea"
                                    name="message"
                                    placeholder="Escribe tu mensaje Aqui"
                                    value={forms.message}
                                    onChange={handleInputForm}
                                    autoComplete='of'
                                    required
                                ></textarea>
                            </div>
                            <button className="form-button" type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </section>
        </>


    )
}
/*cosas pendientes
1. 


*/