import Products from "../Products/Products";
import "./Category.scss";
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";



const Category = ({link}) => {

    let { id } = useParams();
    const [category, setCategory] = useState([])
    useEffect(() => {
        try{
            fetch(`${link}/category/${id}`)
                .then(Response => Response.json())
                .then(data => setCategory(data))
        }
        catch(err){
            console.log("data not found error")
        }
    },[])


    const [data, setProducts] = useState([])
    useEffect(() => {
        fetch(`${link}/products`)
            .then(Response => Response.json())
            .then(data => setProducts(data))
      
    },[])

    const products = data.filter((product) => {
        return product.category === category.category
    })

    return (
        <div className="category-main-content">
       
            <div className="layout">
                <div className="category-title" style={{textTransform:"capitalize"}}>{category.category}</div>
                <Products products={products} innerPage={true}  />
            </div>
        </div>
    );
};

export default Category;
