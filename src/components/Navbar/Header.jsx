import React, { useState } from 'react'
import { LightMode } from '../LightMode'
import { IoSearchOutline } from "react-icons/io5";
import './Header.css'
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';

export const Header = () => {
  const [open, setOpen] = useState(false)

  const handleMenu = () => {
    if (open == true) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  return (
    <>
      <header className='header-container'>
        <div className='header__one'>
          <LightMode ></LightMode>
        </div>
        <nav className='header__two'>
          <ul>
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
            </li></ul>
        </nav>
        <div className='header__three'>
          <Link to={"/rastreo"}>Seguir pedido</Link>
          <Link to={"/login"}>Login</Link>
        </div>
        <div className='menu'>
          <button className="nav__icon" onClick={handleMenu}>
            <div className={`menu__toggle ${open ? "open" : ""}`}>
              <i></i>
            </div>
          </button>
        </div>
      </header>
      <ul className={`menu__res ${open ? "active" : ""}`}>
        <div>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/Galeria">Galeria</Link></li>
          <li><Link to="/contactanos">Contactanos</Link></li>
        </div>
      </ul>
    </>

  )
}
