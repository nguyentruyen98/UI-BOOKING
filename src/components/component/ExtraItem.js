import React from 'react'
import './../style/extraitem.css';
function ExtraItem() {

   
    return (
        <div className="extra-item">
            <div className="extra-item__detail">
                <div className="extra-item__detail__title">
                    <input name="isSelected" type="checkbox"/>
                    <p >HAHAHAH</p>
                </div>
                <p>{`HIHI min`}</p>
            </div>
            <p>{`$ HAHAH`}</p>
        </div>
    )
}

export default ExtraItem
