import { useContext,useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import { Context } from "../../utils/context";


const SingleProduct = ({link}) => {
    const { handleAddToCart } = useContext(Context);  
    let { id } = useParams();
    const [product, setProduct] = useState([])
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        try{
            fetch(`${link}/products/${id}`)
                .then(Response => Response.json())
                .then(data => {setProduct(data)})
                
                
        }
        catch(err){
            console.log("data not found error")
        }


    },[product])   


    const decrement = () => {
        setQuantity((prevState) => {
            if (prevState === 1) return 1;
            return prevState - 1;
        });
    };
    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    };

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img
                            src={
                                product.images
                            }
                        />
                    </div>
                    <div className="right">
                        <span className="name">{product.title}</span>
                        <span className="price">&#8377;{product.price}</span>
                        <span className="desc">{product.description}</span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button className="add-to-cart-button"
                                    onClick={() => {
                                            handleAddToCart(product,quantity);
                                            setQuantity(1);
                                    }}
                                    
                            >
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>

                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Category:{" "}
                                <span>
                                    {product.category}
                                </span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                    <FaPinterest size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div onClick={() => (setQuantity(1))}>
                    <RelatedProducts  category={product.category}
                                        id = {id}
                                        link = {link}
                    />
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
