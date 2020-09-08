import React from 'react';
import './Subtotal.css';
import {useStateValue} from './StateProvider';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from './reducer.js'

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) => ( 
                <>
                    <p>
                        Total for {basket.length} items is {value}
                    </p>
                    <small>
                       
                    </small>
                </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
