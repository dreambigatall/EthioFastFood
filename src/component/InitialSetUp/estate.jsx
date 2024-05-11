

/*import React, { useContext, useState } from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom"
import GetDataApi from "../Api/apiAll";
import SortOption from "../pages/SortingPage";
import { CartContext } from "./CartContext";
import Banner from "../Fetures/Banner";
/*export function loader(){
     
    return GetDataApi()
}
export default function Realestate() {

    const [params , setParams] = useSearchParams();
    const [vans, setVans] = useState([])
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const [serchParams, setSerchParams] = useSearchParams();
    const [isButtonDisabled, setIsButtonDisabled] = useState(null);
    const {cart,
         addToCart ,
          removeFromCart,
           removeAllFromCart,
           toggleDisableDButton,
           disabledButton,
        } = useContext(CartContext)
    //const vans = useLoaderData();

    React.useEffect(() => {
        async function LoadDataApi(){
            setLoading(true)
            try{
            const ApiData= await GetDataApi();
            setVans(ApiData);
            }catch(err){
                setError(err)
            }finally{
            setLoading(false)
            }
        }
        LoadDataApi();
        
    }, [])
    
    const typeFilter=params.get("type");
    const typeSort = serchParams.get('sort')
    const handleSortChange = (event) =>{
        const newSort = event.target.value;
        setSerchParams({sort : newSort})
    }
     //console.log(cart.length)
     //let isInCart = cart?.map((items)=>items.id).includes(vans.id)

    const FilterdItem = typeFilter ? vans.filter(van => van.type === typeFilter? van : "") : vans;
    
    
    
       
        
    
    const vanElements = FilterdItem.map(van => (
        
        <div key={van.id} className="van-tile bg-white rounded-lg shadow-lg overflow-hidden">
  <Link 
    to={`/vans/${van.id}`}
    state={{search: `?${setParams.toString()}`}}
    className="block"
  >
    <img src={van.imageUrl} className="w-full h-auto" alt={van.name} />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{van.name}</h3>
      <p className="text-gray-700">${van.price}<span className="text-gray-500">/day</span></p>
    </div>
    <i className={`van-type ${van.type} selected block p-2 bg-gray-200 text-gray-700 font-semibold`}>{van.type}</i>
  </Link>
  <button 
    disabled={disabledButton[van.id]}
    onClick={() => {
      addToCart(van)
      toggleDisableDButton(van.id)
    }}
    className="block w-full p-4 bg-gray-100 text-gray-800 font-semibold uppercase hover:bg-gray-200 focus:outline-none"
  >
    Add to Cart
  </button>
</div>

    ))

   function handleFilterChange(key, value){
     
    setParams(prevParams => {
        if(value === null){
            prevParams.delete(key)
        } else{
            prevParams.set(key, value)
        }
        return prevParams
    })

   }
    if(loading){
        return(<h1>Loading..</h1>)
    }

    if(error){
        return(<h1>There was an error ${error.message}</h1>)
    }

    return (
        
        <div className=' static top-[60px] flex flex-col gap-3 bg-white p-4 w-full z-10 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.06)] lg:sticky sm:px-10 sm:py-8 sm:top-[80px] md:px-24  md:top-[100px]'>
            <Banner/>
        <h2 className='text-xl font-bold text-DarkGrey sm:text-2xl '>Filters</h2>
        <div className=' flex flex-wrap gap-x-12 gap-y-6 sm:justify-between sm:gap-y-10 '>
                <button onClick={()=> handleFilterChange("type", "luxury")}>Euro</button>
                <button onClick={()=> handleFilterChange("type", "rugged")}>Arebia</button>
                {typeFilter ? (
                <button 
                onClick={()=> handleFilterChange("type" , null)}>
                    clear filter </button>
               
                ) : null
                }
            <SortOption data={vans} handleSortChange={handleSortChange}/>
            </div>
            
            <div className="van-list van-tile-container">
                {vanElements}
            </div>
            
        </div>
    )
}
*/