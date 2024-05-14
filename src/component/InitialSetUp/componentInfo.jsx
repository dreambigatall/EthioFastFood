import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Detail(){
    const {van} = useOutletContext();
    return(
        <section className="component-van-info">
            <h4>Name: <span>{van.name}</span></h4>
            <h4>Type: <span>{van.type}</span></h4>
            <h4>Des: <span>{van.description}</span></h4>
            <h4>Origin: <span>{van.price}</span></h4>
        </section>
    )
}