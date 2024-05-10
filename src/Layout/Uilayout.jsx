import { Outlet } from "react-router-dom";
import React from "react";

import Header from "./Header";
import Developer from "./Footer";
import NavBar from "../Fetures/NavBar";
import UIPositionFixed from "../UI/UIpositionFixed";
import ContainerUI from "../UI/ContainerUi";
export default function UIlayout(){
     
    return(
       <ContainerUI>
       
           
            <UIPositionFixed>
           
           <NavBar/>
           
           </UIPositionFixed>
           
             <Outlet/>
           

            <Developer/>
          
       </ContainerUI>
    )
}