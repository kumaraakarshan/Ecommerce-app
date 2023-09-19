import { Fragment } from "react";
import classes from "./NavBar.module.css";
const NavBar = (props) => {
  return (
    <Fragment>
      <nav className={classes.navbar}>
        <a className={classes.a} href="/">HOME</a>
        <a className={classes.a}href="/store">STORE</a>
        <a className={classes.a}href="/about">ABOUT</a>
        
      </nav>
    </Fragment>
  );
};
export default NavBar;
