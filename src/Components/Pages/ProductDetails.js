import React from "react";
import classes from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
  const params = useParams();
  console.log(params.productDetails);
  return (
    <div className={classes.wraper}>
      <img
        src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
        alt="Website"
      ></img>
      <h1>COLOURS</h1>
      
      <p>{params.productDetails}</p>
    </div>
  );
};

export default ProductDetail;