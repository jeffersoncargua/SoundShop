import { useSelector, useDispatch} from 'react-redux';
import { add,remove,deleteItem } from '../store/cartSlice';
import { decrease,increase,restoreStock } from '../store/productSlice';

import imagen from '../assets/product.jpg';

export const Cart = () => {
  const shoppingCart = useSelector(state => state.cartState.shoppingCart);
  const productList = useSelector(state => state.productState.productList);
  const dispatch = useDispatch();

  const handleIncrease = (product) => {
    const isInStock = productList.find(productItem => productItem.id === product.id && productItem.available > 0);
    if (isInStock) {
      dispatch(add(product));
      dispatch(decrease(product));
    }
  }

  const handleDecrease = (product) => {
    const isInCart = shoppingCart.find(item => item.id === product.id && item.cant > 0);
    if(isInCart){
      dispatch(remove(product));
      dispatch(increase(product));
    }
  }

  const handleDelete = (product) => {
    dispatch(deleteItem(product));
    dispatch(restoreStock(product));
  }

  return (
    <main className='mx-5 my-20 justify-center flex flex-wrap'>
      {
        shoppingCart.map((productItem) => (
          <div key={productItem.id} className='flex flex-col md:flex-row border border-gray-300 my-5'>
            <div className='flex flex-col md:flex-row mx-2 my-5'>
              <div className=''>
                <img className='max-w-sm p-2 border border-gray-300' src={imagen} alt="Imagen Producto" />
              </div>              
              <div className='flex flex-col mx-4 gap-y-4 max-md:mt-5 justify-center'>
                <h1 className='text-3xl'>{productItem.name}</h1>
                <p className='text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, eius.</p>
                <span className='text-xs'><b>Cant</b>: {productItem.cant}</span>
              </div> 
              <div className='flex gap-x-4 mt-5 max-md:my-5 max-md:justify-center'>
                <span className='text-2xl text-green-700' onClick={()=> handleIncrease(productItem)} ><i className="bi bi-file-plus"></i></span>
                <span className='text-2xl text-yellow-800' onClick={()=> handleDecrease(productItem)} ><i className="bi bi-file-minus"></i></span>
                <span className='text-2xl text-red-700' onClick={()=> handleDelete(productItem)} ><i className="bi bi-trash3"></i></span>
              </div>             
            </div>
          </div>
        ))
      }
    </main>
  )
}
