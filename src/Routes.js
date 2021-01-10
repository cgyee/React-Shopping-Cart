import {BrowserRouter, Switch, Route} from "react-router-dom";
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart'
import products from './components/data/products';

function Routes(props) {
  return (
    <BrowserRouter>
      <Navbar />
      <Banner />
      <Switch>
        <Route exact path="/" render={()=><Home cart={props.cart} products={products} setCart={props.setCart} />} />
        <Route exact path="/cart" render={() => <Cart cart={props.cart} setCart={props.setCart} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
