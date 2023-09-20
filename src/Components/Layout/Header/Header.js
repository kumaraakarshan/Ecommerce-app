
import { Fragment,useContext} from "react";
import CartContext from "../../Store/cart-context";
import NavBar from "../NavBar/NavBar";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";



const Header = (props) => {
const cartCtx=useContext(CartContext)

  

  return (
    <Fragment>
      <header className={classes.header}>
        
      <HeaderCartButton onClick={props.onShowCart} />
      <NavBar />
      
        <h1 className={classes.h1}>The Generics</h1>
      </header>
      
    </Fragment>
  );
};
export default Header;
