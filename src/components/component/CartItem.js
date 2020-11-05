import React from 'react';
import img1 from '../../Img/img.png';
import DeleteIcon from '@material-ui/icons/Delete';
import '../style/cartitem.css';
import ExtensionIcon from '@material-ui/icons/Extension';
import CloseIcon from '@material-ui/icons/Close';
function CartItem() {
    return (
        <div className="cartItem">
            <img alt="" src={img1}></img>
            <div className="cartItem__description">
                <p className="cartItem__description__title">Deluxe Spa Manicure</p>
                <div className="cartItem__description__exten">
                    <ExtensionIcon style={{ fontSize: 24, color: "#404040"}} />
                    <p className="cartItem__description__option">Gel Polish, Free Style Brush</p>
                    <CloseIcon style={{ fontSize: 32, color: "red", cursor: "pointer" }} />
                </div>
                <div className="cartItem__description__number">
                    <p className="cartItem__description__time">40 min</p>
                    <p className="cartItem__description__price">$ 38.00</p>
                </div>
            </div>
            <DeleteIcon style={{ fontSize: 40, cursor: "pointer",color: "#404040" }} />

        </div>
    )
}

export default CartItem
