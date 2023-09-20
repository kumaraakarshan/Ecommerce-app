import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavBar.module.css";

const NavBar = (props) => {
 
 
  return (
    <Fragment>
      <nav className={classes.navbar}>
        <NavLink ClassName={classes.icon} to="/Home">
          HOME
        </NavLink>
        <NavLink ClassName={classes.icon} to="/Store">
          STORE
        </NavLink>
        <NavLink ClassName={classes.icon} to="/AboutUs">
          ABOUT
        </NavLink>
        <NavLink ClassName={classes.icon} to="/Login">
          LOGIN
        </NavLink>
        <NavLink activeClassName={classes.icon} to="/ContactUs">
          CONTACT US
        </NavLink>
       
      </nav>
    </Fragment>
  );
};
export default NavBar;
