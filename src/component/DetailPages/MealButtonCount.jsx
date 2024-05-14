import {IoMdAdd, IoMdRemove} from "react-icons/io";

import { useContext } from "react";
import { CartProvider } from "../Store/CartContext";
import { CartContext } from "../Store/CartContext";

 

export default function MealCount({item, isCartLoading}){
    const {cart, addToCart, removeFromCart, removeAllFromCart,  getQuantityForItem} = useContext(CartContext)
    const quantity = getQuantityForItem(item.id)
    function handleDecreaseCount(){
        removeFromCart(item)
    }

    function handleIncreaseCount(){
        addToCart(item)
    }
  
    

return (
    <div className='flex items-center rounded-md text-xl bg-LightGrey  justify-center w-full  outline outline-2 outline-Grey'>
      <button
        className={` text-Grey px-4 w-full basis[200px]  flex justify-center items-center ${isCartLoading && ' cursor-pointer'} ${ 'cursor-not-allowed'}`}
       
        onClick={handleDecreaseCount}
      >
        <IoMdRemove className=' stroke-[10px] text-lg' />
      </button>
      <span className='text-xl  text-MediumGrey w-full flex justify-center font-semibold outline outline-2 outline-Grey px-4'>
        {quantity}
      </span>
      <button
        className={` text-Grey px-4 w-full flex justify-center items-center ${isCartLoading && ' cursor-pointer'}`}
        
        onClick={handleIncreaseCount}
      >
        <IoMdAdd className=' stroke-[10px] text-lg' />
      </button>
    </div>
  );
}