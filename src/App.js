import {  BrowserRouter , Routes,Route, Link , createBrowserRouter, createRoutesFromElements , RouterProvider} from "react-router-dom";

import React  from "react";
import Realestate  from "./component/estate";
import About from "./component/about";
import Home from "./component/home";
import RealDetail from "./component/estateDetail";
import UIlayout from "./Layout/Uilayout";
import Serchpage , {loader as serchLoader} from "./pages/serchpage";
import Detail from "./component/componentInfo";
import Photos from "./component/componentPhothos";
import Price from "./component/componentPrice";
import ModalCart from "./component/modal";
import { CartProvider } from "./component/CartContext";
import Cart from "./component/ComponentCart";
import NotFound from "./component/NotFoundPathcomponent";
import Error from "./pages/Error";
import ItemDetail from "./component/ItemDtailPage";
import Search from "./component/SerchDetail/Search";
import CartDetail from "./component/Cart/CartPage";
import MealItem from "./component/MealPage/MealList";


export default function App(){
return(
 
  <CartProvider>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<UIlayout/>}  >
  <Route index  element={<Home/>} />
  
  <Route path="/serch" element={<Search/>} />
  <Route path="/order" element={<CartDetail/>}/>
  <Route path="/vans/:id" element={<ItemDetail/>}>
    <Route index element={<Detail/>}/>
    <Route path="photos" element={<Photos/>}/>
    <Route path="price" element={<Price/>}/>
    
    </Route>
    <Route path="*" element={<NotFound/>}/>
  </Route>
   </Routes>
   </BrowserRouter>
  </CartProvider>
   
)
}