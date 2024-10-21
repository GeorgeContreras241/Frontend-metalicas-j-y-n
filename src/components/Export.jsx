import React from 'react'

export const Export = () => {
  return (
    <>
      <h3 className='exportar-card'>Exportar</h3>
      <div className='exports'>
        <button className='historial'>Historial</button>
        <button className='mensajespdf'>Exportar Mensajes</button>
        <button className='enviospdf'>Exportar Envios</button>
      </div>
      <span className='aclaracion'>La exportacion se realizara en formato pdf</span>
      <p className='excel'>Proximamente en Excel</p>

    </>
  )
}
