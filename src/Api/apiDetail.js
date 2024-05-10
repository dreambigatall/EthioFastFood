 export default async function GetDeatailApiData(id){
     const url = id ? `/api/vans/${ id }` : '/api/vans';
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