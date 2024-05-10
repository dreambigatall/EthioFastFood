import { useRouteError } from "react-router-dom";

export default function Error(){
    
    const err = useRouteError();

   return(
    <>
    <h1>Error:{err.message}</h1>
    <h4>{err.status} - {err.statusText}</h4>
     </>
   )
}