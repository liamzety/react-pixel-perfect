import React from 'react'
import dine from '../assets/images/dine.png'

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <img src={dine} alt="" />
            </div>
        </header>
    )
}
