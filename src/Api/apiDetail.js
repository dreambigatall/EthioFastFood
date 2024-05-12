 export default async function GetDeatailApiData(id){
     const url = id ? `/api/pizzas/${ id }` : '/api/pizzas';
    const res= await fetch(url)
    if(!res.ok){
        throw{

            message:"faild to fecth the data",
            statusText:res.statusText,
            status:res.status,
        }
    }
     const data= await res.json();
     return data.vans;

 }