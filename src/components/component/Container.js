import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import CartItem from './CartItem';
import Extra from './Extra'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PeopleIcon from '@material-ui/icons/People';
import SpaIcon from '@material-ui/icons/Spa';
import { useDispatch, useSelector } from 'react-redux';
import { loadServiceReq, loadServiceItemReq, loadServiceExtra, loadServiceSelect, cartItem } from '../../redux/actions/index';
import '../style/container.css';
function Container() {
  const [service, setService] = useState('Manicure');
  const selectedService = (nameService) => {
    setService(nameService);
  }
  const dispatch = useDispatch();
  const serviceList = useSelector((state) => state.loadService);
  const cartItemList = useSelector((state) => state.cartItem);
  const serviceListItem = useSelector((state) => state.loadServiceItem);
  const serviceListExtra = useSelector((state) => state.loadServiceExtra);
  const serviceListSelect = useSelector((state) => state.loadServiceSelect);
  console.log(cartItemList)

  const dispatchFetchService = () => { dispatch(loadServiceReq()) };
  const addToCart = (id, service, extra) => { dispatch(cartItem(id, service, extra)) }
  const dispatchFetchServiceItem = (categoryId) => { dispatch(loadServiceItemReq(categoryId)) };
  const dispatchFetchServiceExtra = (extra, rootPrice, rootTime) => { dispatch(loadServiceExtra(extra, rootPrice, rootTime)) };
  const dispatchFetchServiceSelect = (id, name, time, price) => { dispatch(loadServiceSelect(id, name, time, price)) };
  useEffect(() => {
    dispatchFetchService();
    // dispatchFetchServiceItem(94);
    // dispatchFetchServiceItem(91);
    // dispatchFetchServiceItem(68);
    dispatchFetchServiceItem(67);
    // dispatchFetchServiceItem(90);

  }, [])
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
            {
              serviceList.map((item, index) => {
                return (
                  <div className="content__left__menu__item">
                    <p key={index} className={item.name === service ? ('content__left__menu__isSelected') : ('')} onClick={() => selectedService(item.name)}>{item.name}</p>
                    {/* {type.isSelected ? (<p className="content__left__menu__quantity">5</p>) : ('')} */}
                  </div>
                )
              })
            }
          </div>
          <ListItem
            serviceListItem={serviceListItem}
            serviceListExtra={serviceListExtra}
            dispatchFetchServiceExtra={dispatchFetchServiceExtra}
            serviceListSelect={serviceListSelect}
            dispatchFetchServiceSelect={dispatchFetchServiceSelect}
            addToCart={addToCart}

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
