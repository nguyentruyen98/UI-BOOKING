import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import CartItem from './CartItem';
import Extra from './Extra'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PeopleIcon from '@material-ui/icons/People';
import SpaIcon from '@material-ui/icons/Spa';

import '../style/container.css';
function Container() {
  return (

    <div className="container">
      <div className="header">
        <h1>BOOKING APPOINTMENT FORM</h1>
        <p>Book your appointment with a few simple steps !</p>
      </div>
      <div className="content">
        <div className="content__left">
          <div className="content__left__stepper">
            <div className="content__left__stepper__item">
              <SpaIcon />
              <p>Service/Product</p>
            </div >
            <div className="line">

            </div>
            <div className="content__left__stepper__item">
              <PeopleIcon />
              <p>Select Staff</p>
            </div>
            <div className="line">

            </div>
            <div className="content__left__stepper__item">
              <WatchLaterIcon />
              <p>Select Date / Time</p>
            </div>
          </div>
          <div className="content__left__menu">
            <div className="content__left__menu__item">
              <p>HAHAHAHA</p>
              <p>AAAAAAAAAAAA</p>
              <p>BBBBBBBBBB</p>
              <p>CCCC</p>

              {/* {type.isSelected ? (<p className="content__left__menu__quantity">5</p>) : ('')} */}
            </div>
          </div>
          <ListItem
          />
        </div>
        <div className="content__right">
          <div className="content__right__cart">
            <div className="content__right__cart__selected">
              <ShoppingCartIcon className="content__right__cart__selected__icon" />
              <p>1 item selected</p>
            </div>
            <p>Cart</p>
            <p style={{ flex: 0.4 }}></p>
          </div>
          <div className="content__right__cartItem">
            <CartItem />
            <CartItem />
          </div>
          <div className="content__right__total">
            <div className="content__right__total__time">
              <p>Total duration</p>
              <p>40 min</p>
            </div>
            <div className="content__right__total__price">
              <p>Total</p>
              <p>$ 38.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container
