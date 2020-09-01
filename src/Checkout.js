import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import Subtotal from "./Subtotal"



function Checkout() {
  const [{ basket }] = useStateValue();

  
  return (


    <div className="Checkout">
      <div className="Checkout_left">
        {basket?.length === 0 ? (
          <div className="checkout_title">
            <h2>Your Cart is currently empty</h2>
            <p>
              You currently have no items in your cart. In order to buy please
              select "Add to basket" on a product item
            </p>
          </div>
        ) : (
          <div>
            <h2>Your Cart</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      { basket.length > 0&&(
        <div className="subtotal_item">
        <Subtotal />
        </div>
      )
      }
      
    </div>
  );
}

export default Checkout;
