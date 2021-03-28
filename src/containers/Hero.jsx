import React from 'react'
import { Button } from '../cmps/Button'
import { Header } from '../cmps/Header'

export const Hero = () => {
    return (
        <section className="hero">
            <Header />
            <div className="content-container container">
                <div className="txt-container">
                    <h1>Exquisite dining
            since 1989</h1>
                    <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                </div>
                <Button>BOOK A TABLE</Button>
            </div>
        </section>
    )
}
