import { useNavigate } from "react-router-dom";
import GetDataApi from "../../Api/apiAll";
import { useEffect, useState, useContext } from "react";
import ButtonHandler from "../ButtonRefactor";
import {LiaRupeeSignSolid} from "react-icons/lia"
import { CartContext } from "../CartContext";
export default function MealItem() {
    
   
    const { dataApi } = useContext(CartContext)
   
    const navigate = useNavigate();
  
    function handleClickMeal(id) {
      
      navigate(`/vans/${id}`);
    }
  
    return (
      <>
        {dataApi?.map((item) => {
          return (
            <div
              key={item.name}
              className=' relative flex w-[160px] bg-White cursor-pointer flex-col rounded-xl border-[5px] border-White shadow-xl outline outline-2 outline-LightGrey transition duration-300 hover:scale-105 hover:shadow-2xl sm:w-[180px]'
              onClick={() => handleClickMeal(item.id)}
            >
              <div className=' h-[135px] w-auto overflow-hidden rounded-xl'>
                <div
                  className={`absolute left-[-9px] top-3 ml-[-1px] rounded-r-md  bg-white p-1 px-2 pt-[5px] text-[10px] font-bold uppercase tracking-wide shadow-md ${item.type === 'veg' ? 'text-Green' : 'text-Red'}` }
                >
                  {item.type}
                </div>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className=' h-full w-full object-cover'
                />
              </div>
              <div className=' flex flex-auto flex-grow flex-col gap-1 p-2 '>
                <p className=' text-xs font-semibold text-DarkGrey '>
                  {item.name}
                </p>
                
                <div className=' mb-auto flex items-center text-xl '>
                  <LiaRupeeSignSolid className=' mt-[-4px]  stroke-[0.8]   text-Yellow' />
                  <p className=' text-2xl font-bold tracking-tight text-DarkGrey '>
                    {item.price}
                  </p>
                </div>
                <ButtonHandler item={item} className='items-end ' />
              </div>
            </div>
          );
        })}
      </>
    );
  }