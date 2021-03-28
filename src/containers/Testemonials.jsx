import React from 'react'
import food1 from '../assets/images/food1.jpg'
import food2 from '../assets/images/food2.jpg'

export const Testemonials = () => {
    return (
        <section className="testemonials flex justify-center column">

            <div className="content-container flex justify-center align-center container">
                <div className="img-container">
                    <img className="w100" src={food1} alt="" />
                </div>
                <div className="txt-container">
                    <h2>Enjoyable place
                for all the family</h2>
                    <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
                </div>
            </div>

            <div className="content-container flex justify-center align-center container">
                <div className="txt-container">
                    <h2>The most locally sourced food</h2>
                    <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
                </div>
                <div className="img-container">
                    <img className="w100" src={food2} alt="" />
                </div>
            </div>

        </section>
    )
}
