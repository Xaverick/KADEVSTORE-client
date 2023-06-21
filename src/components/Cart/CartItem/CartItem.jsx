import React, { useContext } from "react";
import { Context } from "../../../utils/context";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import "./CartItem.scss"


const CartItem = () => {
    const { cartItems,handleCartProductQuantity,handleRemoveFromCart} = useContext(Context);
    return (
        
        <div className="cart-products">   
            {cartItems.map((item) => (
                <div key={item._id} className="search-result-item">
                    <div className="image-container">
                        <img
                            src={
                            item.images
                            }
                        />
                    </div>
                    <div className="prod-details">
                        <div className="prod-details-heading">
                            <span className="name">{item.title} </span>
                            <span ><MdClose
                                className="close-btn"
                                onClick={() => (
                                    handleRemoveFromCart(item))}
                                
                            />
                            </span>
                        </div>
                        <div className="quantity-buttons">
                            <span onClick={() => (
                                handleCartProductQuantity("dec",item)
                            )}>-</span>
                            <span>{item.quantity}</span>
                            <span onClick={() => (
                                handleCartProductQuantity("inc",item)
                            )}>+</span>
                        </div>
                        <div className="text">
                            <span>{item.quantity}</span>
                            <span>x</span>
                            <span className="highlight">
                                <span>&#8377;{item.price}</span>
                                
                            </span>
                        </div>
                    </div>
                </div>      
            ))} 
            
             
        </div>
    );
};

export default CartItem;
