import { Fragment,useState } from "react";
import Header from "./Components/Layout/Header/Header";
import Body from "./Components/Layout/Body/body";
import Footer from "./Components/Layout/Footer/Footer";
import Cart from "./Components/Cart/Cart";

function App() {
  const[cartIsShown,setCartIsShown]=useState(false)

  const ShowCartHandler=()=>{
    setCartIsShown(true)
  }

  const HideCartHandler=()=>{
    setCartIsShown(false)
  }
  return (
    <Fragment>
     { cartIsShown && <Cart onClose={HideCartHandler}/>}
      <Header onShowCart={ShowCartHandler}/>
      <Body/>
      <Footer/>
    </Fragment>
  );
}

export default App;
