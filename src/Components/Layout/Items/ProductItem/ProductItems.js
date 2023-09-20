import { Fragment, useContext } from "react";
import classes from "./ProductItem.module.css";
import CartContext from "../../../Store/cart-context";
import { Link } from "react-router-dom";
import axios from "axios";


const ProductItems = (props) => {
  const cartCtx = useContext(CartContext);
  let email = localStorage.getItem("email").replace(".", "").replace("@", "");

  const addItemToCart = (event) => {
    event.preventDefault();
    cartCtx.addItem({ ...props, quantity: props.quantity });
    axios.post(
      `https://crudcrud.com/api/70c791f9f0db4a73af933d9d5fe36326/cart${email}`,
      props
    ).then((res) => {
      console.log(res.data, "Successfull");
    })
    .catch((error) => {
      alert(error);
    });
};
 


  return (
    <Fragment>
      
    <div className={classes.Items}>
    
      <h3>{props.title}</h3>
      <Link to={`/products/${props.id}`}>
      <img className={classes.img} src={props.image} alt="some images"></img>
      <div className={classes.price}>Rs. {props.price}</div>
      <button className={classes.button} onClick={addItemToCart}>Add To cart</button>
      </Link>
    </div>

    
    </Fragment>
);
};
export default ProductItems;
