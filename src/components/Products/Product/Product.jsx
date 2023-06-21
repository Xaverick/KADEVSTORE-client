import React from "react";
import "./Product.scss";
import { useNavigate } from "react-router-dom";

const Product = ({_id,price,images,title}) => {
    const navigate = useNavigate();
    return (
    
        <div className="product-card" onClick={() => {
            navigate(`/product/${_id}`);           
        }}>
            <div className="thumbnail">
                <img src={images} />
            </div>
            <div className="prod-details">
                <span className="name">{title}</span>
                <span className="price">&#8377;{price}</span>
            </div>
        </div>
       
    );
};

export default Product;
