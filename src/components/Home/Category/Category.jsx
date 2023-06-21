import { useNavigate } from "react-router-dom";
import "./Category.scss";
import { useEffect, useState } from "react";


const Category = ({link}) => {
   const navigate = useNavigate();
   const [categories, setCategories] = useState([])
   useEffect(() => {
       fetch(`${link}/category`)
           .then(Response => Response.json())
           .then(data => setCategories(data))
     
   },[])


    return (

        <div className="shop-by-category">            
            <div className="categories">
               {categories.map(category => (
                  <div className="category" 
                        onClick={() => {
                           navigate(`/category/${category._id}`);
                        }}>           
                     <img src={category.images} />          
                  </div>   
               ))}               
            </div>
        </div>
    );
};

export default Category;
