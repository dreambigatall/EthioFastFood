import { useOutletContext } from "react-router-dom";

export default function Price(){
    const {van} = useOutletContext();
    return(
        <h4  className="component-price">{van.price}</h4>
    )
}