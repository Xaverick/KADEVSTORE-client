import React from "react";
import { useEffect, useState } from "react";
import Products from "../../Products/Products";

const RelatedProducts = ({category,id,link}) => {


    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`${link}/products`)
            .then(Response => Response.json())
            .then(data => setProducts(data))
      
    },[])
    
    const finalproduct = products.filter((product) => {
        if(product.category === category && id !== product._id){
            return product;
        }
    })

    return (
        <div className="related-products" >
                <Products products={finalproduct} headingText={"Related Products"}/>
        </div>
    );


};

export default RelatedProducts;
