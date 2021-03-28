import React, { useEffect, useState } from 'react'
import { DishPreview } from '../cmps/DishPreview'
import dishService from '../services/dish.service'
import hr from '../assets/images/hr.png'

export const MenuList = () => {
    const [dishes, setDishes] = useState(null)
    useEffect(() => {
        setDishes(dishService.getDishes())

    }, [])

    return (
        <section className="menu-list flex">
            <div className="flex container column w100">
                <div className="menu-list-container flex space-between">
                    <img className="hr" src={hr} alt="" />

                    <div className="left-col main-container flex align-center justify-center">
                        <div className="txt-container">
                            <h2>
                                A few highlights from our menu
                </h2>
                            <p>
                                We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.
                </p>
                        </div>
                    </div>

                    <div className="dishes-container flex column align-center space-between h100">
                        {
                            dishes &&
                            dishes.map((dish, idx) => {
                                return (
                                    <>
                                        <DishPreview dish={dish} key={idx} />
                                        {dishes.length - 1 !== idx ?
                                            <hr className="hr-grey w100" />
                                            : ""
                                        }
                                    </>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}
