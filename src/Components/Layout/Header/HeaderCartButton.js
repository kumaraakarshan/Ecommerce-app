import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span>Cart</span>
      <span>0</span>
    </button>
  );
};
export default HeaderCartButton;
