import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
const NavBar = (props) => {
  return (
    <Fragment>
      <nav className={classes.navbar}>
        <NavLink activeClassName={classes.a}  to="/Home">HOME</NavLink >
        <NavLink activeClassName={classes.a} to="/store">STORE</NavLink >
        <NavLink activeClassName={classes.a} to="/AboutUs">ABOUT</NavLink >
        
      </nav>
    </Fragment>
  );
};
export default NavBar;
