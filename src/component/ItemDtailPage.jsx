import React , { useContext, useEffect, useState } from "react"
import { useParams ,Outlet,  Link, useLocation, useNavigate } from "react-router-dom"
import { CartContext } from "./CartContext";
import GetDeatailApiData from "../Api/apiDetail";
import Dscription from "./DetailPages/Description";
import Price from "./DetailPages/Price";
import Name from "./DetailPages/Name";
import Image from "./DetailPages/Image";
import Catagaroy from "./DetailPages/Catagory";
import MealCount from "./DetailPages/MealButtonCount";
import { IoClose } from "react-icons/io5";
import ButtonHandler from "./ButtonRefactor";
export default function ItemDetail() {
    const {cart, getQuantityForItem} = useContext(CartContext);
    
    const {id} = useParams()
    const [item, setVan] = useState([]);
    const [error, setError] = useState('')
    const [isCartLoading, setLoading] = useState(false)
    const location =useLocation()
    const navigate = useNavigate()
    useEffect(()=>{
        async function dataFetcher(){
            setLoading(true)
            try{
               

          
            const data= await GetDeatailApiData(id)

            setVan(data)
            
            }catch(err){
                     setError(err);
            }finally{
                setLoading(false)

            }
        }
       
        dataFetcher()
       
    },[id])

    
    let isInCart = cart?.map((items)=>items.id).includes(item.id)
  
    //console.log(cart.length)
    const search = location.state?.search || ""
    if(isCartLoading){
        return(<h1>Loading</h1>)
    }
    if(error){
        return(<h1>unable to fech data{error.message}</h1>)
    }
    const quantity = getQuantityForItem(item.id)
    return (
        <div className=' flex flex-col overflow-scroll p-4 w-full sm:p-10 md:px-24 lg:h-full justify-center'>
          
           
              <div
                key={item.id}
                className=' flex flex-col justify-center items-center mx-auto pt-[60px] gap-6 md:pt-[100px] lg:pt-[40px]'
              >
                <div className=' self-end '>
                  <IoClose
                    className=' text-3xl cursor-pointer text-Red md:text-4xl'
                    onClick={() => navigate('/')}
                  />
                </div>
                <div className=' flex flex-col gap-6 items-center justify-center lg:flex-row lg:gap-12'>
                  <Image
                    size='w-[300px] lg:max-w-[40%]'
                    image={item.imageUrl}
                    name={item.name}
                  />
                  <div className=' flex flex-col gap-4 md:gap-6'>
                    <div className=' flex flex-col gap-2 md:items-start'>
                      <div className=' flex justify-center text-center w-full sm:justify-normal'>
                        <Name name={item.name} />
                        {isCartLoading && <h1>Loading..</h1>}
                      </div>
                      <Dscription description={item.description} />
                      <Catagaroy category={item.type} />
                    </div>
                    </div>
                    </div>
                    <MealCount  item={item}  isCartLoading={!isCartLoading}  />
                    <ButtonHandler item={item}/>
                    </div>

           
            </div>
            )
        }