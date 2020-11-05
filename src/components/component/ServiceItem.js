import React from 'react'
import '../style/serviceitem.css';

function ServiceItem() {

    return (
        <div className="serviceItem">
            <img alt="" ></img>
            <div className="serviceItem__description">
                <p className="serviceItem__description__title">asdasd</p>
                <p className="serviceItem__description__info">asdasd</p>
                <div className="serviceItem__number">
                    <p className="serviceItem__number__time">{`asdasdasd min`}</p>
                    <p className="serviceItem__number__price">{`$ adsd`}</p>

                </div>
            </div>
            <button >Add</button>
        </div>
    )
}

export default ServiceItem
