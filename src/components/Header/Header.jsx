import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import Login from "./login.jsx";


const Header = ({link}) => {
    const {cartCount} = useContext(Context);
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [showcart, setShowcart] = useState(false);
    const [showsearch, setShowsearch] = useState(false);
    const [showLogin, setshowLogin] = useState(false);
    const {setUserInfo,userInfo} = useContext(Context);
    const handleScroll = () => {
        const offset = window.scrollY;
        setshowLogin(false)

        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        fetch(`${link}/login`, {
            credentials: 'include'
        }).then( response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
            })
        })
    }, [])
    let username;
    if(userInfo){
        username = userInfo.username;
    }else{
        username = null;
    }
    
    const logout = () => {
        fetch(`${link}/logout`,{
            method: 'POST',
            credentials: 'include'
        });
        setUserInfo(null)
    }

    return (
        <div style={{display:"flex"}} >
            <header
                className={`main-header ${scrolled ? "sticky-header" : ""}`}
            >
                <div className= {`header-content`}>
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li>About</li>
                        <li>Categories</li>
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>
                        KADEVSTORE.
                    </div>
                    <div className="right">                    
                        <TbSearch onClick={() =>{setShowsearch(true)} }/>
                        <AiOutlineHeart />
                        <span className="cart-icon" onClick={() =>{setShowcart(true)}}>
                            <CgShoppingCart />
                            {cartCount?<span>{cartCount}</span>:""}
                        </span>
                        <span className="nav-icon">
                            <i className="fa-solid fa-bars" onClick={() =>{setshowLogin(true)}}></i>
                        </span>
                        
            
                    </div>
     
                </div>
            </header>
            
            <span className={`login`} >                
                <div className="content"> 
                {!username && (
                    <>
                        <p onClick={() => {navigate('/login')}}>Login</p>
                        <p onClick={() => {navigate('/register')}}>Register</p>
                    </>
                )} 

                {username && (
                    <>
                        <p>{username}</p>
                        <p onClick={logout}>Logout</p>
                    </>
                )}    
                </div>
             
            </span>
            {showLogin && <Login setshowLogin={setshowLogin} link={link} />}
            {showcart && <Cart setShowCart={setShowcart}/>}
            {showsearch && <Search setShowSearch={setShowsearch} link={link}/>}
        </div>
    );
};

export default Header;
