import {ProductCard} from '../components/index';

export const ProductList = ({count,setCount, productList, setProductList,shoppingcart,setShoppingCart,product,setProduct}) => {

  return (
    <main className="my-20">
      <div className="max-w justify-center gap-4 flex flex-wrap">
        <ProductCard count={count} setCount={setCount} productList={productList} setProductList={setProductList} shoppingcart={shoppingcart} setShoppingCart={setShoppingCart} product={product} setProduct={setProduct}/> 
      </div>
    </main>
  )
}
