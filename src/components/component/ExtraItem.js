import React from 'react'
import './../style/extraitem.css';
function ExtraItem({ id, name, time, price, dispatchFetchServiceSelect }) {

    const SelectService = (id, name, time, price) => {
        dispatchFetchServiceSelect(id, name, time, price);
    }
    return (
        <div className="extra-item">
            <div className="extra-item__detail">
                <div className="extra-item__detail__title">
                    <input name="isSelected" type="checkbox"
                        onClick={() => SelectService(id, name, time, price)} />
                    <p >{name}</p>
                </div>
                <p>{`${time} min`}</p>
            </div>
            <p>{`$ ${price}`}</p>
        </div>
    )
}

export default ExtraItem
