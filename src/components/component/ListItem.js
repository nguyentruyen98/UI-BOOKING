import React from 'react'
import '../style/container.css';
import '../style/serviceitem.css';
import Extra from '../../components/component/Extra';
import $ from 'jquery';

function ListItem({
    serviceListItem,
    dispatchFetchServiceExtra,
    serviceListSelect,
    serviceListExtra,
    dispatchFetchServiceSelect,
    addToCart }) {
    const openExtra = (extra, rootPrice, rootTime) => {
        $(".extra").fadeIn("fast");
        dispatchFetchServiceExtra(extra, rootPrice, rootTime);
    }
    const addItemToCart = () => {
        addToCart();
    }
    const ItemService = (index, imageUrl, name, description, time, price, extra, item, id) => {
        return (
            <div key={index} className="serviceItem">
                <Extra
                    id={id}
                    item={item}
                    serviceListExtra={serviceListExtra}
                    serviceListSelect={serviceListSelect}
                    serviceListItem={serviceListItem}
                    dispatchFetchServiceSelect={dispatchFetchServiceSelect}
                    addToCart={addToCart} />
                <img alt="" src={imageUrl}></img>
                <div className="serviceItem__description">
                    <p className="serviceItem__description__title">{name}</p>
                    <p className="serviceItem__description__info">{description}</p>
                    <div className="serviceItem__number">
                        <p className="serviceItem__number__time">{`${time} min`}</p>
                        <p className="serviceItem__number__price">{`$ ${price}`}</p>

                    </div>
                </div>
                <button onClick={() => openExtra(extra, price, time, item)}>Add</button>
                <button onClick={() => addToCart(id, item, serviceListSelect)}>IDDDDDDDDDDDDDDd</button>
            </div>
        )
    }
    return (
        <div className="content__left__item">
            <p id="manicure">Manicure</p>
            {
                serviceListItem?.map((item, index) => {
                    if (item.categoryId === 67)
                        return ItemService(index, item.imageUrl, item.name, item.description, item.duration, item.price, item.extras, item, item.serviceId)
                })
            }
            <p id="pedicure">Pedicure</p>
        </div>
    )
}

export default ListItem
