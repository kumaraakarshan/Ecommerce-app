import { Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes
import Header from "./Components/Layout/Header/Header";
import Footer from "./Components/Layout/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Store/CartProvider";
import AboutUs from "./Components/Pages/AboutUs";
import Home from "./Components/Pages/Home";

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
        <Routes> {/* Wrap your routes with <Routes> */}
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Fragment>
  );
}

export default App;
