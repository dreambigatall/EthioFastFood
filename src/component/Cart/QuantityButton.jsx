import { CartContext } from "../CartContext";
import { useContext } from "react";

export default function QuantityButton({item}){

     const {cart, addToCart, removeFromCart, removeAllFromCart,  getQuantityForItem, isCartOpen} = useContext(CartContext);

     function handleClickInc(item){
        addToCart(item)

     }

     function handleClickDec(item){
        removeFromCart(item)
     }
        
     return (
        <div className=' flex h-6 items-center border text-Orange border-Yellow rounded-[4px] bg-LightYellow'>
          <button
            className=' p-1  disabled:cursor-not-allowed'
            onClick={() => handleClickDec(item)}
            
          >
            {'-'}
          </button>
          <span className='flex items-center text-sm h-full p-1 mt-[1px]'>
            {item?.quantity}
          </span>
          <button
            className=' p-1 disabled:cursor-not-allowed'
            onClick={() => handleClickInc(item)}
           
          >
            {'+'}
          </button>
        </div>
      );
    
}