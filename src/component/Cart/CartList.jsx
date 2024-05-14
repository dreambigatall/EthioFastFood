import QuantityButton from "./QuantityButton";

import { CartContext } from "../Store/CartContext";
import { useContext } from "react";
import {FaTrash} from  "react-icons/fa"
import {MdOutlineRemoveCircle} from "react-icons/md"
export default function CartItem({cartData}){
  const { removeAllFromCart, removeCartItem} = useContext(CartContext)
  function handleDeleteItem(e){
     e.stopPropagation();
     removeCartItem(cartData)
  }
return (
    <>
      <div
        className='  cursor-default flex gap-4 flex-col w-full'
        onClick={(e) => e.stopPropagation()}
      >
        {cartData?.map((item) => {
          return (
            <div
              key={item.id}
              className=' flex gap-4 items-center justify-between border p-2 rounded-md border-Grey/30'
            >
              <div className=' flex flex-col gap-1'>
                <span className=' text-xs font-bold capitalize w-[100px]'>
                  {item.name}
                </span>
                <div className=' flex justify-start items-start text-Grey gap-[2px]'>
                  <span className=' text-[9px]'>$</span>
                  <span className=' font-medium text-xs '>{item.price}</span>
                </div>
              </div>
              <QuantityButton item={item} />
              <div className=' flex items-center gap-1'>
                <div className=' flex text-Grey gap-[2px] w-[60px]  justify-end'>
                  <span className=' text-xs mt-1 text-Orange'>$</span>
                  <span className=' text-DarkGrey font-bold '>
                    {item.price * item.quantity}
                  </span>
                </div>
                <MdOutlineRemoveCircle
                  className=' text-Orange cursor-pointer'
                  onClick={() => removeAllFromCart(item)}
                />
              </div>
            </div>
          );
        })}
       
        
      
       <button
        className={` flex gap-2  transition duration-200 p-3 text-sm px-6 bg-red-400 rounded-md text-red-700 font-semibold uppercase hover:text-red-800  '}`}
        type='button'
        onClick={(e)=>{handleDeleteItem(e)}}
      >
              Clear
            <FaTrash className=' text-xs mb-1'/>
        </button>
       
      
      </div>
      </>
  )
 }