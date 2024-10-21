import React from 'react'
import './parrafo.css'
import parrafos from '../../data/parrafos.json'

export const Parrafo = () => {

    return (

        <div className='container-principal'>

            <section className="workshop-section">
                <div className="workshop-container">
                    <div className="workshop-header">
                        <h2 className="workshop-title">Taller de Ornamentación</h2>
                        <p className="workshop-subtitle">
                            Transformamos espacios con nuestros servicios de diseño, decoración y ebanistería.
                        </p>
                    </div>
                    <div className="workshop-grid">
                        <div className="workshop-item">
                            <h3 className="workshop-item-title">Diseño de Interiores</h3>
                            <p className="workshop-item-description">
                                Nuestro equipo de diseñadores crea espacios únicos y funcionales que reflejan tu estilo personal. Desde la
                                planificación hasta la ejecución, nos encargamos de cada detalle para que tu hogar o negocio luzca
                                impecable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ornaments-section">
                <div className="ornaments-container">
                    {parrafos.map((ornament, index) => (
                        <div className="ornament-card" key={index}>
                            <img
                                src={ornament.imgSrc}
                                alt={ornament.imgAlt}
                                className="ornament-image"
                            />
                            <div className="ornament-content">
                                <h3 className="ornament-title">{ornament.title}</h3>
                                <p className="ornament-description">{ornament.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>

    )
}
