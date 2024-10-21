import React from 'react'
import { LightMode } from  '../LightMode'

export const Menu = () => {
    return (
        <nav className='nav-menu'>
            <div className='img-name'>
                <img src="https://www.ajtransmisiones.com/images/NOTICIAS-2023/equipos-de-soldadura-y-sus-usos-I.jpg" alt="" />
                <div>
                    <h2>Bienvenido </h2>
                    <span>Metalicas</span>
                </div>
            </div>
            <ul>
                <li><a href="">Inicio</a></li>
                <li><a href="">Administrador de Envios</a></li>
                <li><a href="">Administrador de Mensajes</a></li>
                <li><a href="">Editor</a></li>
                <li><a href="">Configuracion</a></li>
                <li><a href=''>Salir</a></li>
            </ul>
            <LightMode></LightMode>
        </nav>
    )
}
