import React from 'react'
import './Card.css'

export const Card = ({id,title,img}) => {
    return (
        <div  key={id} className='box'>
            <img src={img} alt={title}  className='box__img' />
        </div>
    )
}
