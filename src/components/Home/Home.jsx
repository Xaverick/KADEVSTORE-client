import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";

import { Context } from "../../utils/context";

const Home = ({link}) => {


    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category  link={link}/>
                    <Products
                        headingText="Popular Products"
                        link={link}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
