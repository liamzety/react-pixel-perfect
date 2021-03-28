import React from 'react'
import dine from '../assets/images/dine.png'

export const Footer = () => {
    return (
        <footer className="flex align-center justify-center">
            <div className="container flex space-between">
                <div className="img-container">
                    <img src={dine} alt="" />
                </div>
                <p>
                    Marthwaite, Sedbergh <br />
                Cumbria <br />
                +00 44 123 4567
                </p>
                <p></p>

                <p>
                    OPEN TIMES <br />
            MON - FRI: 09:00 AM - 10:00 PM <br />
            SAT - SUN: 09:00 AM - 11:30 PM
                </p>
            </div>
        </footer>
    )
}
