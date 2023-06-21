import "./Products.scss";
import Product from "./Product/Product";
import { useEffect, useState } from "react";


const Products = ({ products,innerPage, headingText ,link}) => {
    const [data, setProducts] = useState([])
    useEffect(() => {
        fetch(`${link}/products`)
            .then(Response => Response.json())
            .then(data => setProducts(data))
      
    },[data])
    if(!products){
        products = data;
    }
    return (
        <div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className={`products ${innerPage ? "innerPage" : ""}`}>
                {products.map(product => (
                    <Product {...product}/>
                ))}              
            </div>
        </div>
    );
};

export default Products;
