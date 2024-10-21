import React from 'react'
import './Card.css'

export const Card = ({id,title,description,img}) => {
    return (
        <div  key={id} className='box'>
            <img src={img} alt="" />
            <div className='overlay'>
                <h3><span>{title}</span></h3>
                <p>{description}</p>
                <div className='overlay-button'>
                    <button className='overlay-more'>Ver mas</button>
                    <button className='overlay-like'>Me gusta</button>
                </div>
            </div>
        </div>
    )
}
