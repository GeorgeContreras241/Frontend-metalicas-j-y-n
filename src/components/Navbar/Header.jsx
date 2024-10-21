import React from 'react'
import { LightMode } from '../LightMode'
import { IoSearchOutline } from "react-icons/io5";
import './Header.css'
import { Link } from 'react-router-dom';

export const Header = ({ text }) => {
  return (
    <header className='header-container'>
      <nav className='header'>
        <div className='header-one'>
          <li><LightMode></LightMode></li>
          <li>{text}</li>
        </div>
        <div className='header-two'>
          <li>
            <Link to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/Galeria">
              Galeria
            </Link>
          </li>
          <li>
            <Link to="/contactanos">
              Servicios
            </Link>
          </li>
        </div>
        <div className='header-three'>
          <li><Link to={"/rastreo"}
          ><button className='header-button'>Serguir Pedido</button>
          </Link></li>
          <li><Link to={"/login"}
          ><button className='header-button'>Login</button>
          </Link></li>
        </div>
      </nav>
    </header>
  )
}
