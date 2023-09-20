import { useContext,useEffect,useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../Store/cart-context";


const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    setQuantity(cartCtx?.items?.length || 0) 
  },[cartCtx.items])

 

  return (
    <button onClick={props.onClick} className={classes.button}>
      <span>Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};
export default HeaderCartButton;
