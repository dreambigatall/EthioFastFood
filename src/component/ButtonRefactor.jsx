import { CartContext } from "./Store/CartContext";
import { useContext, useState } from "react";
import {IoIosRemoveCircle, IoIosAddCircle} from "react-icons/io"
export default function ButtonHandler({item}){
    const {cart,
        addToCart ,
         removeFromCart,
          removeAllFromCart,
          toggleDisableDButton,
          disabledButton,
       } = useContext(CartContext)
     const {id} = item
     const [isLoading, setisLoading] = useState(true)

       let isInCart = cart?.map((items)=>items.id).includes(item.id)
     
    
       return (
        <button
         
          onClick={(e)=>{
            e.stopPropagation();
            isInCart?removeAllFromCart(item):addToCart(item)}}
            
          className={`disabled:cursor-not-allowed flex w-full items-center justify-center gap-1 rounded-md border-2 py-1 text-White shadow-md transition duration-100 active:scale-85 ${isInCart ? 'border-DarkRed bg-Red' : 'border-DarkGreen bg-Green'}`}
        >
          <span className=' font-medium text-sm'>
            {isInCart ? 'Remove' : 'Add to cart'}
          </span>
          {isInCart ? <IoIosRemoveCircle /> : <IoIosAddCircle />}
        </button>
      );
    }
    


