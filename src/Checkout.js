import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal.js';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <img
                className="checkout__banner"
                src="https://dummyimage.com/1500x200/014/fff"
                alt=""
            />
              
           {basket?.length===0
            ?<div>Your shopping Basket is empty :(</div>
            :<div><h2 className="checkout__title">Your shopping basket</h2></div>    
           }
           <div className="checkout__list">
                {
                basket?.map(item =>{
                    console.log(item);
                    return (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                 />
                );
            }
            )}
                
                

           </div>
           <div className="checkout__subtotal">
                <Subtotal/>
            </div>
           
        </div>
    )
}

export default Checkout
