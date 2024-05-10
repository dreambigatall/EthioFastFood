import { useState, useEffect } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import GetDataApi from "../Api/apiAll";
import { IoHome } from  'react-icons/io5';

export function loader(){
    
    return GetDataApi();
}
export default function Serchpage(){
    const[data, setData]=useState([]);
    const[serchQuery, setSerchQuery] = useState('');
    const[serchResult, setSerchResult]= useState([]);
    const[loading , setLoading] = useState('')
    const[error, setError] = useState('');
    const navigate = useNavigate();
    //const data = useLoaderData()
    useEffect(()=>{
         async function DataApi(){
            setLoading(true)
            try{
            const SerchData= await GetDataApi();
            setData(SerchData);
            }catch (err){
                setError(err)

            }finally{
            setLoading(false)
            }
         }
         DataApi()
    },[])
    

    function handleSerchInputChange(e){
        setSerchQuery(e.target.value)
    }

    function performSerch(){
        const filterResult= data.filter(item => 
            item.name.toLowerCase().includes(serchQuery.toLowerCase())
            );
            setSerchResult(filterResult);
    }
    useEffect(() => {
        performSerch();
      }, [serchQuery]);
    if(loading){
        return(<h1>Loading..</h1>)
    }
    if(error){
        return(<h1>There was error : {error.message}</h1>)
    }
    
    function handleClick(){
      navigate(-1)
    }

    return(
        <div className="flex justify-center items-center p-4 flex-col gap-8 w-full sm:p-10 sm:gap-12 md:px-24">
            <h1>serch page</h1>
            <form >
                <input
                className="'p-3 bg-LightGrey rounded-md rounded-r-none  focus-visible:outline-none text-lg text-DarkGrey font-medium h-[40px] w-full sm:w-[500px] sm:h-[50px] '"
                type="text"
                value={serchQuery}
                onChange={handleSerchInputChange}
                placeholder="Enter Your serch query"/>
    
            
            
            </form>
            { serchQuery && (
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-8">
                {serchResult.map(item=> (
                    <div key={item.id}>
                         <Link 
            to={`/vans/${item.id}`}
           >
                <img src={item.imageUrl} />
                <div className="item-info">
                    <h3>{item.name}</h3>
                    <p>${item.price}<span>/day</span></p>
                </div>
                <i className={`item-type ${item.type} selected`}>{item.type}</i>
            </Link>
                    </div>
                ))}
            </div>)}
        </div>
    )
}