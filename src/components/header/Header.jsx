import React, { useEffect, useState } from "react";
import "./Header.scss";
import siteLogo from "../../assets/gbsLogo.png";
import { NavLink } from "react-router-dom";
const Header = () => {
     const [scrollNavbar, setScrollNavbar] = useState(false);
     useEffect(()=>{
        const handleScroll = () => { 
          if (window.scrollY > 100) {
            setScrollNavbar(true);
          } else {
            setScrollNavbar(false);
          }
        };
    window.addEventListener('scroll', handleScroll);
  },[])
  return (
    <header className={scrollNavbar?"desktobHeader navSticky":" desktobHeader"} >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-2">
            <div className="logo">
              <img src={siteLogo} alt="" />
            </div>
          </div>
          <div className="col-7">
            <div className="navLinks">
              <ul>
                <li>
                  <NavLink  to="/" 
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >Home</NavLink>

                </li>
                <li>
                  <NavLink  to="/products" 
                    className={({ isActive }) => (isActive ? "active" : "")}>Products</NavLink>
                </li>
                <li>
                  <NavLink  to="/about" 
                    className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
                </li>
                <li>
                  <NavLink  to="/contact" 
                    className={({ isActive }) => (isActive ? "active" : "")}>Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className="navInfo">
              <span>+123 456 78 89</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
