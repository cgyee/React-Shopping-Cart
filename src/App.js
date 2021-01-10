import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart'
import products from './components/data/products';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <Navbar />
      <Banner />
      <Switch>
        <Route exact path="/" render={()=><Home cart={cart} products={products} setCart={setCart} />} />
        <Route exact path="/cart" render={() => <Cart cart={cart} setCart={setCart} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
