import React from 'react'

export const DishPreview = ({ dish }) => {

    return (
        <div className="dish-preview">
            <div className="dish-preview-container flex space-between">
                <div className="img-container relative">
                    <div style={{ backgroundImage: `url(${dish.imgUrl})` }} className="dish-img"></div>
                    <hr className="hr-orange" />
                </div>
                <div className="txt-container">
                    <h3 className="dish-title relative">
                        {dish.title}
                    </h3>
                    <p className="dish-desc">
                        {dish.desc}
                    </p>
                </div>
            </div>
        </div>
    )
}
