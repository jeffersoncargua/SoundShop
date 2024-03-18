import {Hero , ProductList} from '../components/index';

export const Home = ({count,setCount,productList,setProductList,shoppingcart,setShoppingCart,product,setProduct}) => {
  
  return (
      <main>
        <Hero/>
        <ProductList count={count} setCount={setCount} productList={productList} setProductList={setProductList} shoppingcart={shoppingcart} setShoppingCart={setShoppingCart} product={product} setProduct={setProduct} />
      </main>
  )
}
