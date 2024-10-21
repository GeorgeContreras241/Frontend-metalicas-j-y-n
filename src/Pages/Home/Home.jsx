import React, { useState } from 'react'
import './Home.css'
import { Parrafo } from '../../components/parrafo/Parrafo'




export const Home = () => {
    return (
        <>
            <div className="hero-container">
                <main className="hero-main">
                    <div className="hero-content">
                        <div className="hero-bg-gradient"></div>
                        <div className="hero-bg-image"></div>
                        <div className="hero-text">
                            <h1 className="hero-title">Taller de Ornamentación</h1>
                            <p className="hero-description">
                                Aquí encontrarás una amplia variedad de trabajos artísticos y de ornamentación de alta calidad.
                            </p>
                            <div className="hero-buttons">
                                <a href="#" className="hero-button hero-button-primary">Galería de Trabajos</a>
                                <a href="#" className="hero-button hero-button-secondary">Sobre Nosotros</a>
                            </div>
                        </div>
                    </div>
                </main>
                <Parrafo></Parrafo>
                <footer className="hero-footer">
                    <div className="footer-content">
                        <p>© 2024 Taller de Ornamentación. Todos los derechos reservados.</p>
                        <nav className="footer-nav">
                            {/* Additional footer links can be added here */}
                        </nav>
                    </div>
                </footer>
            </div>
        </>
    )

}
