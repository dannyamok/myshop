import React from 'react';
import Button from '@material-ui/core/Button';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import "./Subtotal.css"
import {getBasketTotal} from "./reducer";

function Subtotal() {
    const [{ basket }] = useStateValue();
    return (
        <div className="subtotal">
            
            <CurrencyFormat 
            renderText={(value) =>(
                <>
                <p>
            Subtotal ({basket.length} items):<strong>{value}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox" /> This order contains
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <Button className="checkout_btn">Checkout</Button>
        </div>
    )
}

export default Subtotal
