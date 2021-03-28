import React from 'react'
import { Button } from '../cmps/Button'

export const Cta2 = () => {
    return (
        <section className="cta2 flex align-center">
            <div className="container flex space-between">
                <h2>Ready to make a reservation?</h2>
                <Button>
                    BOOK A TABLE
            </Button>
            </div>
        </section>
    )
}
