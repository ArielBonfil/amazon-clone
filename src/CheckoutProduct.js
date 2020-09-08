import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from './StateProvider'


function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch]= useStateValue();
    console.log(id, title, image, price, rating);
    const removeFromBasket = () =>{
        //remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
            
    });
    };
    
    return (
        <div className="checkoutProduct">
            <img src={image} alt=""></img>
            <div className="checkout__info">

                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill("_")
                        .map(showStars => (<p>+</p>))
                    }
                </div>
                <button className="checkoutProduct__removeButton" onClick={removeFromBasket}>Remove item</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
