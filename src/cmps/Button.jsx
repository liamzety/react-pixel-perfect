import React, { useEffect } from 'react'

export const Button = ({ children, border }) => {
    return (
        <button style={border ? { border: '1px solid' } : { border: '1px solid transparent' }} className="cta-button">
            {children}
        </button>
    )
}
