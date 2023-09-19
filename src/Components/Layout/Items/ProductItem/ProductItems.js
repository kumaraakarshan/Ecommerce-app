import { Fragment, useContext } from "react";
import classes from "./ProductItem.module.css";
import CartContext from "../../../Store/cart-context";
import { Link } from "react-router-dom";

const ProductItems = (props) => {

  const cartCtx = useContext(CartContext);

  const addItemToCart = (event) => {
    event.preventDefault();
    cartCtx.addItem({
      title: props.title,
      price: props.price,
      imageUrl: props.image,
      Qty: 1,
    });
  };

  return (
    <Fragment>
    <div className={classes.Items}>
      <h3>{props.title}</h3>
      <img src={props.image} alt="some images"></img>
      <div className={classes.price}>Rs. {props.price}</div>
      <button className={classes.button} onClick={addItemToCart}>Add To cart</button>
     
    </div>

    
    </Fragment>
);
};
export default ProductItems;
