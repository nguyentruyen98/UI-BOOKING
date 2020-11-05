import React from 'react'
import '../style/serviceitem.css';

function ServiceItem({ imageUrl, name, price, time, description }) {
    
    return (
        <div className="serviceItem">
            <img alt="" src={imageUrl}></img>
            <div className="serviceItem__description">
                <p className="serviceItem__description__title">{name}</p>
                <p className="serviceItem__description__info">{description}</p>
                <div className="serviceItem__number">
                    <p className="serviceItem__number__time">{`${time} min`}</p>
                    <p className="serviceItem__number__price">{`$ ${price}`}</p>

                </div>
            </div>
            <button >Add</button>
        </div>
    )
}

export default ServiceItem
