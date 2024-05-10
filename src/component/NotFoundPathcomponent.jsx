import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <>
        <h1>Thepage you look is not found </h1>
         <Link to="/"><button>Back to home page</button></Link>
        </>
    )

}