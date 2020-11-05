import React from 'react'
import '../style/extra.css';
import ExtraItem from './ExtraItem';

function Extra() {
  
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
        </div>
      </div>
      <div className="extra__total">
        <p className="extra__total__label">Total:</p>
        <p className="extra__total__time">100 min</p>
        <p className="extra__total__price">$ 30</p>
      </div>
      <div className="extra__button">
        <button className="extra__button__close">Close</button>
        <button className="extra__button__book"> Book</button>
      </div>
    </div>
  )
}

export default Extra
