import React from 'react'
import { IoExitOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

export const Exit = () => {
    return (
        <div>
            <Link to="/">
                <IoExitOutline
                    fontSize="28px"
                    style={{
                        transform: 'scaleX(-1)'
                    }}
                />
                <span className='class-exit'>Regresar</span>
            </Link>
        </div>
    )
}
