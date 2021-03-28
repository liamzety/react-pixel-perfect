import React from 'react'
import { Button } from '../cmps/Button'

export const Cta1 = () => {
    return (
        <section className="cta1">
            <div className="cta1-container flex align-center justify-center container">
                <div className="img-placeholder"></div>
                <div className="content-container flex column">
                    <div className="txt-container">
                        <h2>Family Gathering</h2>
                        <p>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>
                        <Button border={true}>
                            BOOK A TABLE
                    </Button>
                    </div>
                    <div className="txt-container2">
                        <p className="active">FAMILY GATHERING</p>
                        <p className="active">SPECIAL EVENTS</p>
                        <p>SOCIAL EVENTS</p>
                    </div>
                </div>
            </div>

        </section>
    )
}
