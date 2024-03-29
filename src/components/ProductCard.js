
import Headphone from '../assets/product.jpg';

export const ProductCard = ({count,setCount,productList,setProductList,shoppingcart,setShoppingCart,product,setProduct}) => {

  const handleShopping = async (headphone) => {
    let cartItem = await productList.find((productItem) => productItem.id===headphone.id && productItem.available> 0);
    console.log(cartItem);
    if(cartItem!==undefined){
      setCount( count + 1);
      let newList = await productList.map((productItem) => productItem.id===headphone.id ? {...productItem, available: productItem.available-=1} : productItem);
      setProductList(newList);
      let cart = shoppingcart.find((productItem) => productItem.id===headphone.id);
      if (cart!==undefined) {
        let newShopping = await shoppingcart.map((productItem) => productItem.id===cart.id ? {...productItem, cant: productItem.cant+=1} : productItem);
        setShoppingCart(newShopping);
      }else{
        const objeto = {
          id: headphone.id,
            name: headphone.name,
            imagen: '',
            cant: 1
        };
        setProduct(objeto);
        setShoppingCart([...shoppingcart,objeto]);
      }
    }else{
      console.log("Producto no disponible");
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
        <button onClick={() => handleShopping(productItem)} className="text-sm my-3 rounded-lg py-2 px-10 bg-blue-400 hover:bg-blue-600 text-slate-50 hover:cursor-pointer">Add</button>
      </div>
    ))}          
    </>
  )
}
