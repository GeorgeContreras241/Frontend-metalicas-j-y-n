import React from 'react'
import { Menu } from '../../components/Menu/Menu'
import { Conteo } from '../../components/Conteo'
import '../dash/dashboard.css'
import { Export } from '../../components/Export'
import { DataTables } from '../../components/DataTables/DataTables'
import { Mensajes } from '../../components/Mensajes/Mensajes'



export const Dashboard = () => {
  return (
    <>
      <div className="container-grid">
        <div className="menu">
          <Menu></Menu>
        </div>
        <div className="mensajes">
          <div className='sombra'>
            <Mensajes></Mensajes>
          </div>
        </div>
        <div className="envios">
          <div className='sombra'>
            <DataTables></DataTables>
          </div>
        </div>

        <div className='derecha'>
          <div className="conteo">
            <div className='sombra'>
              <Conteo></Conteo>
            </div>
          </div>
          <div className="exportar">
            <div className='sombra'>
              <Export></Export>
            </div>
          </div>
          <div className="datos">
            <div className='sombra'>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
