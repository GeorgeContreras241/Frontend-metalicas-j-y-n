import React from 'react'
import './Mensajes.css'
export const Mensajes = () => {
    return (
        <div className="container">
            <div className="header">
                <h1>Bandeja de entrada</h1>
                <div className="search-pagination">
                    <input
                        className="search-input"
                        placeholder="Buscar mensajes..."
                        type="text"
                        value=""
                    />
                    <nav
                        aria-label="pagination"
                        className="pagination"
                        role="navigation"
                        currentpage="1"
                        totalpages="2"
                    ></nav>
                </div>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Remitente</th>
                            <th>Asunto</th>
                            <th>Contenido</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2023-06-01</td>
                            <td>George Michel Contreras Moreno</td>
                            <td>Cotizacion</td>
                            <td>2023-06-01</td>
                        </tr>
                        <tr>
                            <td>2023-06-03</td>
                            <td>Aleja Nino</td>
                            <td>Cotizacion</td>
                            <td>2023-06-01</td>
                        </tr>
                        <tr>
                            <td>2023-06-05</td>
                            <td>Jorge Contreras</td>
                            <td>Cotizacion</td>
                            <td>2023-06-01</td>
                        </tr>
                        <tr>
                            <td>2023-04-06</td>
                            <td>Jilberto Garcia</td>
                            <td>Cotizacion</td>
                            <td>2023-06-01</td>
                        </tr>
                        <tr>
                            <td>2023-08-08</td>
                            <td>Marisol Pardo</td>
                            <td>2023-06-01</td>
                            <td>2023-06-01</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
