import React from 'react'
import './DataTables.css'

export const DataTables = () => {
  return (
    <div className="card">
    <div className="card-header">
      <h3>Envíos</h3>
      <p>Estado de los envíos recientes.</p>
    </div>
    <div className="card-body">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Seguimiento</th>
              <th>Destinatario</th>
              <th>Fecha de envío</th>
              <th>Estado</th>
              <th>Detalles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1Z 999 AA1 13 0123 4567</td>
              <td>
                <div>Sophia Rodríguez</div>
                <div className="address">Calle Principal 123, Ciudad</div>
              </td>
              <td>2023-06-15</td>
              <td><div className="badge in-transit">En tránsito</div></td>
              <td><button className="details-button">Ver detalles</button></td>
            </tr>
            <tr>
              <td>1Z 999 AA1 13 0456 7890</td>
              <td>
                <div>Alejandro Gómez</div>
                <div className="address">Avenida Central 456, Ciudad</div>
              </td>
              <td>2023-06-12</td>
              <td><div className="badge delivered">Entregado</div></td>
              <td><button className="details-button">Ver detalles</button></td>
            </tr>
            <tr>
              <td>1Z 999 AA1 13 1234 5678</td>
              <td>
                <div>Lucía Fernández</div>
                <div className="address">Calle del Sol 789, Ciudad</div>
              </td>
              <td>2023-06-20</td>
              <td><div className="badge shipped">Enviado</div></td>
              <td><button className="details-button">Ver detalles</button></td>
            </tr>
            <tr>
              <td>1Z 999 AA1 13 9876 5432</td>
              <td>
                <div>Juan Ramírez</div>
                <div className="address">Avenida del Mar 321, Ciudad</div>
              </td>
              <td>2023-06-18</td>
              <td><div className="badge in-transit">En tránsito</div></td>
              <td><button className="details-button">Ver detalles</button></td>
            </tr>
            <tr>
              <td>1Z 999 AA1 13 9876 5432</td>
              <td>
                <div>Juan Ramírez</div>
                <div className="address">Avenida del Mar 321, Ciudad</div>
              </td>
              <td>2023-06-18</td>
              <td><div className="badge in-transit">En tránsito</div></td>
              <td><button className="details-button">Ver detalles</button></td>
            </tr>
            <tr>
              <td>1Z 999 AA1 13 9876 5432</td>
              <td>
                <div>Juan Ramírez</div>
                <div className="address">Avenida del Mar 321, Ciudad</div>
              </td>
              <td>2023-06-18</td>
              <td><div className="badge in-transit">En tránsito</div></td>
              <td><button className="details-button">Ver detalles</button></td>
            </tr>
            <tr>
              <td>1Z 999 AA1 13 9876 5432</td>
              <td>
                <div>Juan Ramírez</div>
                <div className="address">Avenida del Mar 321, Ciudad</div>
              </td>
              <td>2023-06-18</td>
              <td><div className="badge in-transit">En tránsito</div></td>
              <td><button className="details-button">Ver detalles</button></td>
            </tr>
           
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}
