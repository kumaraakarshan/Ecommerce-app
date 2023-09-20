import { useHistory } from "react-router-dom";
import { Fragment,useContext } from "react";
import NavBar from "../NavBar/NavBar";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import LoginContext from "../../Store/LoginContext";

const Header = (props) => {
  const authCtx = useContext(LoginContext);
  const history = useHistory();
  const logoutHandler = () => {
    authCtx.logout();
    history.replace('/Login')
  }
  return (
    <Fragment>
      <header className={classes.header}>
        
      <HeaderCartButton onClick={props.onShowCart} />
      <NavBar />
      <button onClick= {logoutHandler} className={classes.logoutButton}> Logout </button>
        <h1 className={classes.h1}>The Generics</h1>
      </header>
      
    </Fragment>
  );
};
export default Header;
