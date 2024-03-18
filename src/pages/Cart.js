import imagen from '../assets/product.jpg';

export const Cart = ({count, setCount, productList, setProductList,shoppingcart, setShoppingCart}) => {

  const handleIncrease = (item) => {
    let itemCart = productList.find((productItem) => productItem.id===item.id && productItem.available > 0);
    console.log(itemCart);
    if (itemCart!==undefined) {
      let newList = productList.map((productItem) => productItem.id === item.id ? {...productItem,available:productItem.available-=1}: productItem);
      setProductList(newList);
      let newShopping = shoppingcart.map((cart)=> cart.id === item.id ? {...cart,cant:cart.cant+=1 } : cart)
      setCount(count+1);
      setShoppingCart(newShopping);
    }else{
      let newList = productList.map((productItem) => productItem.id === item.id ? {...productItem,available:productItem.available=0}: productItem);
      setProductList(newList);
      console.log('No se puede obtener mas articulos');
    }
  }

  const handleDecrease = (item) => {
    let itemCart = shoppingcart.find((productItem) => productItem.id===item.id && productItem.cant > 0);
    if (itemCart!==undefined) {
      let newShopping = shoppingcart.map((cart)=> cart.id === item.id ? {...cart,cant:cart.cant-=1} : cart);
      setShoppingCart(newShopping);
      let newList = productList.map((productItem) => productItem.id ===item.id ? {...productItem,available:productItem.available+=1} : productItem);
      setCount(count-1);
      setProductList(newList);
    }else{
      let newList= shoppingcart.filter((productItem) => productItem.id !== item.id);
      console.log(newList);
      setShoppingCart(newList);
    }
  }

  const handleDelete = (item) => {
    let newList = shoppingcart.filter((cart) => cart.id !==item.id);
    setShoppingCart(newList);
    let updateList = productList.map((productItem) => productItem.id ===item.id ? {...productItem,available:productItem.available+=item.cant} : productItem);
    setProductList(updateList);
    setCount(count-1);
  }

  console.log(productList);
  console.log(shoppingcart);

  return (
    <main className='mx-5 my-20 justify-center flex flex-wrap'>
      {
        shoppingcart.map((productItem) => (
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
