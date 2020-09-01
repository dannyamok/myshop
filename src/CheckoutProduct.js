import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,title,price,rating,image}) {
    const[{basket},dispatch] = useStateValue();
    const removeFromBasket = () => {
       dispatch({
           type:'REMOVE_FROM_BASKET',
           id: id,
       }) 
    }
    
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt="" />

            <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">{title}</p> 
            <p className="checkoutProduct_price">
               <small>$</small>
                <strong>{price}</strong>
           </p>
           <div className="checkoutProduct_rating">
               {
                   Array(rating)   
                    .fill()
                   .map((_) =>(
                    <StarIcon />
                   ))
               }
           </div>
           <Button onClick={removeFromBasket} className="Remove" variant="contained">Remove From Cart</Button>
           </div>
        </div>
    )
}

export default CheckoutProduct
