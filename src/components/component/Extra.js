import React from 'react'
import '../style/extra.css';
import ExtraItem from './ExtraItem';
import $ from 'jquery';

function Extra({
  serviceListExtra,
  id,
  dispatchFetchServiceSelect,
  serviceListSelect,
  item,
  addToCart }) {
  const openExtra = () => {
    $(".extra").fadeOut("fast");
  }
  const addItemToCart = (id, service, extra) => {
    addToCart(id, service, extra);
    
  }

  return (
    <div className="extra">
      <div className="extra__header">
        <h1>Deluxe Spa Manicure</h1>
        <div className="extra__header__number">
          <p className="extra__header__number__time">25 min</p>
          <p className="extra__header__number__price">$ 28</p>
        </div>
        <p>Nail enhancement prices may be more due to the length and style of your nail.</p>
      </div>
      <div className="extra__option">
        <p className="extra__option__title">Extra services</p>
        <div className="extra__option__item">
          {
            serviceListExtra.extra?.map((item, index) => {
              return (
                <ExtraItem
                  key={index}
                  id={item.extraId}
                  name={item.name}
                  price={item.price}
                  time={item.duration}
                  dispatchFetchServiceSelect={dispatchFetchServiceSelect}
                />
              )
            })
          }
        </div>
      </div>
      <div className="extra__total">
        <p className="extra__total__label">Total:</p>
        <p className="extra__total__time">{`${serviceListSelect.reduce((total, time) => total + time.time, 0) + serviceListExtra.rootTime} min`}</p>
        <p className="extra__total__price">{`$ ${parseInt(serviceListExtra.rootTime) + serviceListSelect.reduce((total, price) => parseInt(total) + parseInt(price.price), 0)}`}</p>
      </div>
      <div className="extra__button">
        <button className="extra__button__close" onClick={() => openExtra()}>Close</button>
        <button className="extra__button__book" onClick={() => addItemToCart(id, item, serviceListSelect)}> Book</button>
      </div>
    </div>
  )
}

export default Extra
