import { Fragment, useState,useContext,useEffect} from "react";
import axios from "axios";
import { Route,Redirect, Switch } from "react-router-dom";
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
import CartContext from "./Components/Store/cart-context";

function App() {

  if(!localStorage.getItem('email')) {
    localStorage.setItem("email","")
  }

  const authCtx = useContext(LoginContext);
  const cartCtx = useContext(CartContext);
  let email = localStorage.getItem("email").replace(".", "").replace("@", "");


  const [cartIsShown, setCartIsShown] = useState(false);

  const ShowCartHandler = () => {
    setCartIsShown(true);
  };

  const HideCartHandler = () => {
    setCartIsShown(false);
  };

  useEffect(() => {
    if (!email) return;
     axios.get(`https://crudcrud.com/api/1fd3ffa8dc6f4bf09f52cede24f9cef4/cart${email}`).then((res) => {
       const data= (res.data)
       for (const key in data) {
         const item = data[key];
         item._id = key;
         cartCtx.mapID(item)
       }
       
     }).catch((err) => {
       alert(err)
     })
   }, [email, cartCtx])

  return (
    <Fragment>
      
      <CartProvider>
        {cartIsShown && <Cart onClose={HideCartHandler} />}
        <Header onShowCart={ShowCartHandler} />
        
        <Switch>
        <Route path="/" exact>
          <Redirect to="/Login" />
        </Route>

        <Route path="/AboutUs">
          <AboutUs />
        </Route>

        <Route path="/Home">
          <Home2 />
        </Route>

        <Route path="/Store">
        {authCtx.isLoggedIn && <Store />}
           {!authCtx.isLoggedIn && <Redirect to='/Login'/>}
          
        </Route>

        <Route path="/ContactUs">
          <ContactUs />
        </Route>

        <Route path="/products/:product_id">
            <ProductDetail />
          </Route>

       <Route path="/Login" exact>
        <LoginForm/>
        {!authCtx.isLoggedIn && <Redirect to='/Login'/>}
        </Route>
        </Switch>

        <Footer />
      </CartProvider>
    </Fragment>
  );
}

export default App;




