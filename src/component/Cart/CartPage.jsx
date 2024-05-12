import { CartContext } from "../CartContext";
import { useContext } from "react";
import CartItem from "./CartList";
import NoDataFound from "../NoData";

import NoSearchMessage from "../SerchDetail/NoSerch";

export default function CartDetail(){

     const { cart,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        toggleDisableDButton,
        disabledButton,
        getQuantityForItem,
        isCartOpen,
        removeCartItem,
        handleCloseCart } = useContext(CartContext)

       
        
          function handleClickCloseCart(e) {
            e.stopPropagation();
              handleCloseCart();
          }
        
          return (
            <>
              <div
                className={`${!isCartOpen ? 'open right-0' : 'close right-[-576px]'} transition-all duration-300 overflow-y-auto h-full absolute z-20 inline-block p-4 bg-White right-0 w-full text-DarkGrey shadow-xl pointer-events-auto pb-[100px] cursor-pointer sm:w-[400px] sm:pb-[140px] sm:p-10 md:w-[450px] md:p-12 md:pb-[160px]` }
                onClick={(e) => handleClickCloseCart(e)}
              >
                <div className=' cursor-default flex mb-6 gap-6 justify-between'>
                  <h2 className=' text-xl font-bold capitalize  md:text-2xl'>
                    My orders
                 </h2>
                </div>
                <div className=' flex flex-col justify-center items-center gap-8'>
                  {cart?.length < 1 ? (
                    <NoDataFound/>
                  ) : (
                    <CartItem cartData={cart} />
                  )}
                </div>
              </div>
              {isCartOpen && (
                <div
                  className='pointer-events-auto cursor-pointer h-screen bg-black/20 backdrop-blur-[2px] transition duration-300 hidden sm:block'
                  onClick={handleCloseCart}
                ></div>
              )}
            </>
          );

}