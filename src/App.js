import { Fragment, useState } from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Store/CartProvider";
import AboutUs from "./Components/Pages/AboutUs";
import Home2 from "./Components/Pages/Home2";
import Store from "./Components/Pages/Store";
import ContactUs from "./Components/Pages/ContactUs";
import ProductDetail from "./Components/Pages/ProductDetails";

function App() {
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

        <Footer />
      </CartProvider>
    </Fragment>
  );
}

export default App;
