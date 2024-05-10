export default async function GetDataApi(){
    const res = await fetch ("/api/vans");
    if(!res.ok){
        throw{
        message:"Faild to load",
        StatusText:res.statusText,
        status:res.status,
        }
    }

    const data= await res.json();
    return data.vans;
}



