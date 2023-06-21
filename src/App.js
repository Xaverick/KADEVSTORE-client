import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Login from "./components/auth/login/login"
import Register from "./components/auth/register/register"
import AppContext from "./utils/context";

const link = 'https://kadevstore.onrender.com';
function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header link={link}/>
                <Routes>
                    <Route path="/" element={<Home link={link}/>} />
                    <Route path="/category/:id" element={<Category link={link}/>} />
                    <Route path="/product/:id" element={<SingleProduct link={link}/>} />
                    <Route path="/login" element={<Login link={link} heading={"Login"}/>} />
                    <Route path="/register" element={<Register link={link} heading={"Register"}/>} />
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
