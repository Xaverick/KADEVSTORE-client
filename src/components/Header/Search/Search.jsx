import React, { useState,useEffect } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import { useNavigate } from "react-router-dom";

const Search = ({ setShowSearch ,link}) => {

    const [state, setstate] = useState({
        query: '',
        list: []
      })
   
    useEffect(()=>{
        fetch(`${link}/products`)
        .then(Response => Response.json())
        .then(data => setstate({query:'',list:data}))
      
    }, [])


   


  
    const navigate = useNavigate();

    const onChange = (e) => {
        
        const products = state.list.filter((product) => {
            if(product.title.toLowerCase().includes(e.target.value.toLowerCase())){
                return product;
            }
        })
        setstate({
            query: e.target.value,
            list: products
        })
    };

    // useEffect( ()=>{
    //     let products = data.filter((product) => {
    //         if(product.title.indexOf(query)){
    //             return product;
    //         }
    //     })
    //     setProducts(products)
    // },[query])

    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"
                    value={state.query}
                    onChange={onChange}
                />
                <MdClose
                    className="close-btn"
                    onClick={() => setShowSearch(false)}
                />
            </div>

            <div className="search-result-content">
                {false && (
                    <div className="start-msg">
                        Start typing to see products you are looking for.
                    </div>
                )}
                <div className="search-results">         
                    {!state.list.length ? "Your query did not return any results" :state.list.map((product) => (
                        
                        <div
                            className="search-result-item"
                            key={product.title}
                            onClick={() => {
                                navigate(`/product/${product._id}`);
                                setShowSearch(false);
                            }}
                        >
                            <div className="image-container">
                                <img
                                    src={
                                        product.images
                                    }
                                />
                            </div>
                            <div className="prod-details">
                                <span className="name">
                                    {product.title}
                                </span>
                                <span className="desc">
                                    {product.description}
                                </span>
                            </div>
                        </div>                    
                  
                    


                    ))}           
                    
                </div>
            </div>
        </div>
    );
};

export default Search;
