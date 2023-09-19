import { Fragment } from "react";
import classes from './ProductItem.module.css'
const ProductItems = (props) => {
  return (
    <Fragment>
      <div className={classes.Items}>
        <h3>{props.title}</h3>
        <img src={props.image} alt="some images"></img>
        <div className={classes.price}>Rs. {props.price}</div>
        <button className={classes.button}>Add To cart</button>
       
      </div>

      
      </Fragment>
  );
};
export default ProductItems;
