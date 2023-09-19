import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
const NavBar = (props) => {
  return (
    <Fragment>
      <nav className={classes.navbar}>
        <NavLink activeClassName={classes.icon} to="/Home">
          HOME
        </NavLink>
        <NavLink activeClassName={classes.icon} to="/Store">
          STORE
        </NavLink>
        <NavLink activeClassName={classes.icon} to="/AboutUs">
          ABOUT
        </NavLink>
        <NavLink activeClassName={classes.icon} to="/ContactUs">
          Contact Us
        </NavLink>
      </nav>
    </Fragment>
  );
};
export default NavBar;
