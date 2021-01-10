import './App.css';
import React, {useState} from 'react';
import Routes from './Routes';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <Routes cart={cart} setCart={setCart} />
  );
}

export default App;
