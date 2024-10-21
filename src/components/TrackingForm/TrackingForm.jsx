import React from 'react'
import './TrackingForm.css'

export const TrackingForm = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h1 className="card-title">Seguimiento de Envíos</h1>
                    <p className="card-subtitle">
                        Ingresa el número de seguimiento para ver el estado de tu envío.
                    </p>
                </div>
                <div className="card-body">
                    <form className="form">
                        <div className="form-group">
                            <label className="form-label" htmlFor="trackingNumber">
                                Número de Seguimiento
                            </label>
                            <input
                                className="form-input"
                                type="text"
                                id="trackingNumber"
                                placeholder="Ingresa el número de seguimiento"
                            />
                        </div>
                        <button className="submit-button" type="submit">
                            Buscar
                        </button>
                    </form>
                </div>
                <div className="card-body">
                    <div className="status-container">
                        <div className="status-card">
                            <div className="status-header">
                                <div className="status-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="icon"
                                    >
                                        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                        <path d="M15 18H9"></path>
                                        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                        <circle cx="17" cy="18" r="2"></circle>
                                        <circle cx="7" cy="18" r="2"></circle>
                                    </svg>
                                </div>
                                <h2 className="status-title">Estado del Envío</h2>
                                <div className="status-text">En tránsito</div>
                            </div>
                            <p className="status-description">
                                Tu envío se encuentra en camino a su destino.
                            </p>
                        </div>
                        <div className="timeline-card">
                            <h2 className="timeline-title">Línea de Tiempo</h2>
                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="timeline-icon">1</div>
                                    <div>
                                        <h3 className="timeline-item-title">Pedido Recibido</h3>
                                        <p className="timeline-item-date">12 de Abril, 2023</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-icon">2</div>
                                    <div>
                                        <h3 className="timeline-item-title">Preparando Envío</h3>
                                        <p className="timeline-item-date">13 de Abril, 2023</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-icon">3</div>
                                    <div>
                                        <h3 className="timeline-item-title">En Tránsito</h3>
                                        <p className="timeline-item-date">14 de Abril, 2023</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-icon">4</div>
                                    <div>
                                        <h3 className="timeline-item-title">Entregado</h3>
                                        <p className="timeline-item-date">15 de Abril, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
