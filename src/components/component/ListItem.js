import React from 'react'
import '../style/container.css';
import '../style/serviceitem.css';

function ListItem() {
    const ItemService = () => {
        return (
            <div className="serviceItem">
                <img alt="" ></img>
                <div className="serviceItem__description">
                    <p className="serviceItem__description__title">asdasdas</p>
                    <p className="serviceItem__description__info">asdasd</p>
                    <div className="serviceItem__number">
                        <p className="serviceItem__number__time">{`asdasdas min`}</p>
                        <p className="serviceItem__number__price">{`$ asdadas`}</p>

                    </div>
                </div>
                <button>Add</button>
            </div>
        )
    }
    return (
        <div className="content__left__item">
            <p id="manicure">Manicure</p>
                {ItemService()}
            <p id="pedicure">Pedicure</p>
        </div>
    )
}

export default ListItem
