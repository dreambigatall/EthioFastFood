import GetDataApi from '../Api/apiAll';

import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [disabledButton, setDisableButton] = useState({})
  const [isCartOpen, setIsCarOpen] = useState(false)
  const [dataApi, setDataApi] = useState([]);
  useEffect(()=>{
    const fetchData = async ()=>{
        const apiData = await GetDataApi();
        setDataApi(apiData)
    }
    fetchData()
  },[]) 

  const addToCart = (ingredient) => {
    const updatedCart = [...cart]; // Create a copy to avoid mutation
    const existingItemIndex = updatedCart.findIndex(item => item.id === ingredient.id);
  
    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity++;
    } else {
      updatedCart.push({ ...ingredient, quantity: 1 }); // Add new ingredient with quantity 1
    }
  
    setCart(updatedCart);
    setDisableButton({ ...disabledButton, [ingredient.id]: true }); // Disable button on adding
  };




  const removeFromCart = (ingredient) => {
    const updatedCart = [...cart];
  const existingItemIndex = updatedCart.findIndex(item => item.id === ingredient.id);

  if (existingItemIndex !== -1) {
    if (updatedCart[existingItemIndex].quantity === 1) {
      updatedCart.splice(existingItemIndex, 1); // Remove the item
    } else {
      updatedCart[existingItemIndex].quantity--;
    }
  }

  setCart(updatedCart);
  if(updatedCart.length===0){
  setDisableButton({ ...disabledButton, [ingredient.id]: false }); // Enable button after removal
  }
  };
   




  const removeAllFromCart = (itemIds) => {
    // 1. Create a copy of the cart to avoid mutation:
    const updatedCart = [...cart];
  
    // 2. Filter the cart to keep only items not in the provided IDs:
    const filteredCart = updatedCart.filter(item => !itemIds.id.includes(item.id));
  
    // 3. Update the cart state with the filtered items:
    setCart(filteredCart);
    setDisableButton({ ...disabledButton, [itemIds.id]: false });
  };
 


    const toggleDisableDButton =  (id) => {
      setDisableButton({...disabledButton, [id]: !disabledButton[id]});
    }



    useEffect(()=> {
      const persistedDisableButton = localStorage.getItem('disabledButton')
      if(persistedDisableButton){
        setDisableButton(JSON.parse(persistedDisableButton))
      }
      return () =>{
        localStorage.setItem('disabledButton', JSON.stringify(disabledButton))
      };
    }, [])
 


    const getQuantityForItem = (itemID) =>{
      const foundItem = cart.find(item => item.id===itemID);
      return foundItem ? foundItem.quantity : 0;
    }


    
    const removeCartItem = () => {
      
       setCart([]);
      setDisableButton({  });
      
     
    }

    function handleCloseCart() {
      setIsCarOpen(false);
    }

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    toggleDisableDButton,
    disabledButton,
    getQuantityForItem,
    isCartOpen,
    removeCartItem,
    handleCloseCart,
    dataApi

  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};