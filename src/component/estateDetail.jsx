
import React , { useContext, useEffect, useState } from "react"
import { useParams ,Outlet,  Link, useLocation } from "react-router-dom"
import { CartContext } from "./CartContext";
import GetDeatailApiData from "../Api/apiDetail";
export default function RealDetail() {
    const {cart, addToCart, removeFromCart, removeAllFromCart,  getQuantityForItem} = useContext(CartContext);
    const [cartitem, setCartitem] = useState([]);
    const {id} = useParams()
    const [van, setVan] = useState([]);
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const location =useLocation()
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

    function handleCart(data){

        setCartitem((cartitem)=>[...cartitem, data])

    }
    let isInCart = cart?.map((items)=>items.id).includes(van.id)
    const quant =  getQuantityForItem(van.id)
    //console.log(cart.length)
    const search = location.state?.search || ""
    if(loading){
        return(<h1>Loading</h1>)
    }
    if(error){
        return(<h1>unable to fech data{error.message}</h1>)
    }

    return(
        <div className="van-detail-container">
            <Link to="/"
              relative="path"

              >X</Link>
        {van ? (
            <div className="van-detail">
                <img src={van.imageUrl} />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button" onClick={()=>{
                    removeFromCart(van)
                }}>-</button>
                <p>{quant}</p>
                <button onClick={()=>{
                    addToCart(van)
                }}>+</button>
                <button className="link-button" onClick={()=>{
                 isInCart?removeAllFromCart(van):addToCart(van)
                    }}>
                    {isInCart?"remove car":"Rent this van"}
                    </button>
                
            </div>
        ) : <h2>Loading...</h2>}
       
    </div>
    )
}

