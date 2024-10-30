import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import './Contact.css';
import { useForm } from "../../hooks/useForm.js";
import emailjs from "emailjs-com"; // Asegúrate de que este import sea correcto

const initialInput = {
    name: "",
    email: "",
    message: ""
}
/*https://web.whatsapp.com/send?phone=573044767693*/
export const Contact = () => {
    const { forms, handleInputForm } = useForm(initialInput);

    const handleSend = (e) => {
        e.preventDefault();

        // Asegúrate de que estas IDs sean correctas
        emailjs.send("service_kkcp3gx", "template_kax0yzr", {
            from_name: forms.name,
            to_name: "Soporte", // Puede ser un valor fijo o el nombre de destino
            message: forms.message,
            email: forms.email,
        }, "OgdIP4gqOdDoGhpTn") // Tu user ID de EmailJS
        .then((result) => {
            alert("Correo enviado exitosamente");
        }, (error) => {
            console.error("Error al enviar el correo:", error);
            alert("Error al enviar el correo, intenta de nuevo.");
        });
    };

    return (
        <>
            <div className='container-flex'>
                <h2 className='title'>Contactanos</h2>
                <div className='container-one'>
                    <p>Mediante este formulario podrás enviarnos tus preguntas y nuestro equipo te contactará.</p>
                    <h4>¿Cómo funciona?</h4>
                    <p>No te preocupes, te explicaremos cómo funciona. Deberás dejar los siguientes datos:</p>
                    <ol>
                        <li>Nombres y Apellidos</li>
                        <li>Correo Electrónico</li>
                        <li>Tu duda o mensaje</li>
                    </ol>
                </div>
                <div className='container-two'>
                    <p>Nosotros te contactaremos lo más pronto posible para responder tus dudas.</p>
                    <p className='container-wp'>Nuestro WhatsApp</p>
                    <button className='container-button-wp'><a target="__black" href="https://web.whatsapp.com/send?phone=573044767693"><FaWhatsapp fontSize={28} /></a></button>
                </div>
            </div>
            <section className="contact-section">
                <div className="contact-container">
                    <div className="contact-info">
                        <h2 className="contact-title">Contáctanos</h2>
                        <p className="contact-description">
                            ¿Tiene alguna pregunta o quiere trabajar juntos? Complete el formulario y nos comunicaremos lo antes posible.
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
                                        placeholder="Escribe tu nombre y apellido"
                                        type="text"
                                        value={forms.name}
                                        onChange={handleInputForm}
                                        autoComplete='off'
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="email">Correo Electrónico</label>
                                    <input
                                        className="form-input"
                                        name="email"
                                        placeholder="Escribe tu correo"
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
                                    placeholder="Escribe tu mensaje aquí"
                                    value={forms.message}
                                    onChange={handleInputForm}
                                    autoComplete='off'
                                    required
                                ></textarea>
                            </div>
                            <button className="form-button" type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};
