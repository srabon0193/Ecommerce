import React from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shopContext";
import { useContext } from "react";
import { CartItem  } from "./cartItem";
import {useNavigate} from "react-router-dom"
import "./cart.css"
export const Cart = () => {
    const { cartItems ,  getTotalAmount} = useContext(ShopContext);
const totalAmount=getTotalAmount()
const navigate= useNavigate()
  return (
    <div className="cart">
      <div className="shopTitle">
        <h1>Your Cart Products</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>


      { totalAmount >0 ? (
        <div className="checkout">
        <p>Subtotal:${totalAmount}</p>
        <button onClick={()=> navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>)
      :(
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};
