import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Home,Cart,Contact,PageNotFound } from "../pages/index";

export const AllRoutes = ({count,setCount}) => {

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
    <Routes>
        <Route path='/' element={ <Home count={count} setCount={setCount} productList={productList} setProductList={setProductList} shoppingcart={shoppingcart} setShoppingCart={setShoppingCart} product={product} setProduct={setProduct} /> } />
        <Route path='cart' element={ <Cart count={count} setCount={setCount} productList={productList} setProductList={setProductList}  shoppingcart={shoppingcart} setShoppingCart={setShoppingCart} /> } />
        <Route path='contact' element={ <Contact /> } />
        <Route path='*' element={ <PageNotFound /> } />
      </Routes>
  )
}
