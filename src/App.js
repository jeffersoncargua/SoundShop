import { useState } from 'react';

import {Header,Footer,} from './components/index';
import { AllRoutes } from './routes/AllRoutes';

import './App.css';

function App() {

  const [count,setCount] = useState(0);
  const [product,setProduct] = useState({});
  const [shoppingcart,setShoppingCart] = useState([]);
  const [productList, setProductList] = useState([
    {
      id: 10001,
      name: 'Headphone Sony XM-1101',
      imagen: '../public/assets/product.jpg',
      available: 5
    },
    {
      id: 10002,
      name: 'Headphone Sony PO-1000',
      imagen: '../public/assets/audifono1.jpg',
      available: 10
    },
    {
      id: 10003,
      name: 'Headphone Sony LT-3101',
      imagen: './public/assets/audifono2.jpg',
      available: 15
    },
    {
      id: 10004,
      name: 'Headphone Sony WP-5001',
      imagen: './public/assets/audifono3.jpg',
      available: 20
    }
  ]);

  return (
    <div className="App">
      <Header count={count} setCount={setCount}/>
      <AllRoutes count={count} setCount={setCount} productList={productList} setProductList={setProductList} shoppingcart={shoppingcart} setShoppingCart={setShoppingCart} product={product} setProduct={setProduct} />
      <Footer />
    </div>
  );
}

export default App;
