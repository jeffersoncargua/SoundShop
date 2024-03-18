import { Routes, Route } from "react-router-dom";

import { Home,Cart,Contact,PageNotFound } from "../pages/index";

export const AllRoutes = ({count,setCount,productList,setProductList,shoppingcart,setShoppingCart,product,setProduct}) => {

  return (
    <Routes>
        <Route path='/' element={ <Home count={count} setCount={setCount} productList={productList} setProductList={setProductList} shoppingcart={shoppingcart} setShoppingCart={setShoppingCart} product={product} setProduct={setProduct} /> } />
        <Route path='cart' element={ <Cart count={count} setCount={setCount} productList={productList} setProductList={setProductList}  shoppingcart={shoppingcart} setShoppingCart={setShoppingCart} /> } />
        <Route path='contact' element={ <Contact /> } />
        <Route path='*' element={ <PageNotFound /> } />
      </Routes>
  )
}
