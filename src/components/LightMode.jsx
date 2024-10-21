import React, { useState, useEffect } from 'react'
import { CiDark } from "react-icons/ci";
import { IoMdSunny } from "react-icons/io"

import './Navbar/Header.css'

export const LightMode = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.style.setProperty('--color', 'rgba(255, 255, 255, 0.87)')
      root.style.setProperty('--background-color', '#242424')
      root.style.setProperty('--hover-color', '#292929')
      root.style.setProperty('--button-bg-color', '#333333')
      root.style.setProperty('--border-color', '#333333')
      root.style.setProperty('--targetas', '#292929')
      
    } else {
      root.style.setProperty('--color', '#213547')
      root.style.setProperty('--background-color', '#ffffff')
      root.style.setProperty('--hover-color', '#f1f1f1')
      root.style.setProperty('--button-bg-color', '#f9f9f9')
      root.style.setProperty('--border-color', '#d4d4d8')
      root.style.setProperty('--targetas', '#dcdcdc')
    }
  }, [darkMode])

  return (
    <div className='button-container'>
      <button className="buttonMode" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <IoMdSunny fontSize={20} /> : <CiDark fontSize={20} className='icons'/>}
      </button>
    </div>

  )
}
