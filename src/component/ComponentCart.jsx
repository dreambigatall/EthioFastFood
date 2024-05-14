import React , {useContext} from "react";
import { CartContext } from "./Store/CartContext";

export default function Cart() {
    const { cart, addToCart, removeFromCart } = useContext(CartContext);
    console.log(cart.length)
    return (
      <div className=' cursor-default flex mb-6 gap-6 justify-between'>
          <h2 className=' text-xl font-bold capitalize  md:text-2xl'>
            My orders
          </h2>
        {cart.map(item => (
          <div key={item.id} className="flex flex-col justify-center items-center gap-8">
            <p>{item.name} x {item.quantity}</p>
            <p>Subtotal: ${item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))}
        {/* Display total price here */}
      </div>
    );
  }