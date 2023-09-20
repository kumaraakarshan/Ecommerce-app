import { Fragment, useState,useContext} from "react";
import { Route,Redirect } from "react-router-dom";
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Store/CartProvider";
import AboutUs from "./Components/Pages/AboutUs";
import Home2 from "./Components/Pages/Home2";
import Store from "./Components/Pages/Store";
import ContactUs from "./Components/Pages/ContactUs";
import ProductDetail from "./Components/Pages/ProductDetails";
import LoginForm from "./Components/Pages/LoginPage";
import LoginContext from "./Components/Store/LoginContext";

function App() {
  const authCtx = useContext(LoginContext);
  const [cartIsShown, setCartIsShown] = useState(false);

  const ShowCartHandler = () => {
    setCartIsShown(true);
  };

  const HideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      
      <CartProvider>
        {cartIsShown && <Cart onClose={HideCartHandler} />}
        <Header onShowCart={ShowCartHandler} />
     

        <Route path="/AboutUs">
          <AboutUs />
        </Route>

        <Route path="/Home">
          <Home2 />
        </Route>

        <Route path="/Store">
          <Store />
        </Route>

        <Route path="/ContactUs">
          <ContactUs />
        </Route>

        <Route path="/product/:productDetails">
          <ProductDetail />
        </Route>

       <Route path="/Login" exact>
        
        <LoginForm/>
        {!authCtx.isLoggedIn && <Redirect to='/Login'/>}
        </Route>

        <Footer />
      </CartProvider>
    </Fragment>
  );
}

export default App;
