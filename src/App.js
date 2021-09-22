import './App.css';
import Laptop from './components/Laptops/Laptop';
import { useState } from 'react';
import Users from './components/Users/Users';


function App() {
  const laptop = { name: 'Dell', price: '20000', color: 'Black' };
  const [quantity, setQuantity] = useState(0);
  const increase = () => setQuantity(quantity + 1);


  return (
    <div className="App">
      <h2>Laptop:{quantity}</h2>
      <button onClick={increase}>Click</button>

      <Laptop key={laptop.name} name={laptop.name} price={laptop.price}></Laptop>
      <Users></Users>

    </div>
  );
}

export default App;
