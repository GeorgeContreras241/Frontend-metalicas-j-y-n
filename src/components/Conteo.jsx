import React from 'react'

export const Conteo = () => {
  return (
    <>
      <h2 className='conteo-card'>Estadisticas</h2>
      <div className='counter'>
        <div className='counter-card'>
          <div className='barra'></div>
          <p>Numero de Envios</p>
          <span>25</span>
          <div className='reload'></div>
        </div>
        <div className='counter-card'>
          <div className='barra'></div>
          <p>Numero de Mensajes</p>
          <span>25</span>
          <div className='reload'></div>
        </div>
        <div className='counter-card'>
          <div className='barra'></div>
          <p>Vistas de la Web</p>
          <span>25</span>
          <div className='reload'></div>
        </div>
      </div>
    </>
  )
}
