import React from "react";
import {db} from "./Firebase";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { useStateValue } from "./StateProvider";


function Product({ id, title, price, image, rating }) {

  const [{basket}, dispatch] = useStateValue();

  const basket1=  {
      item: {
          id: id,
          title: title,
          price: price,
          image: image,
          rating: rating,
      }
  }
  const data = db.collection('Orders').doc('order1').set(basket1);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        rating: rating,
        price: price,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <StarIcon />
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <Button className="view_details" variant="contained">
        View Product
      </Button>
      <IconButton
        onClick={addToBasket}
        color="primary"
        aria-label="add to shopping cart"
      >
        <AddShoppingCartIcon />
      </IconButton>
    </div>
  );
}

export default Product;
