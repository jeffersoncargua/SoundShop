import { useDispatch , useSelector} from 'react-redux';
import { add } from '../store/cartSlice';
import { decrease } from '../store/productSlice';

import Headphone from '../assets/product.jpg';

export const ProductCard = () => {

  const dispatch = useDispatch();
  const productList = useSelector(state => state.productState.productList);
  const handleAdd = (product) =>{
    const isInStock = productList.find(item => item.id === product.id && item.available > 0);    
    if (isInStock) {
      dispatch(decrease(product));
      dispatch(add(product));
    }
  }

  return (
    <>
    { productList.map((productItem) => (
      <div key={productItem.id} className='max-w-sm text-center p-2 border border-gray-300 rounded-md'>
        <img className='rounded-lg' src={Headphone} alt="Imagen Producto" />
        <h1 className='text-3xl my-3'>{productItem.name}</h1>
        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nam.</p>
        <span className='text:xs block py-2'>Available: {productItem.available}</span>
        {
          productItem.available > 0 ? (
          <button onClick={() => handleAdd(productItem)} className="text-sm my-3 rounded-lg py-2 px-10 bg-blue-400 hover:bg-blue-600 text-slate-50 hover:cursor-pointer">Add</button>) 
          : <button disabled className="text-sm my-3 rounded-lg py-2 px-10 bg-red-400 text-slate-50">Add</button>
        }        
      </div>
    ))}          
    </>
  )
}
