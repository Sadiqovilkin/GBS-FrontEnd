import React from "react";
import "./Banner.scss";
import bannerRectangle from "../../../assets/patterns/bannerRectangle.png";
import { NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <section id="banner">
      <div className="overlay"></div>
      <div className="bannerForm">
        <img src={bannerRectangle} alt="" className="contentPatternTop" />
        <img src={bannerRectangle} alt="" className="contentPatternBottom" />
        <div className="bannerContactForm">
          <h2>Contact Us</h2>
          <form action="">
            <input type="text" placeholder="Name Surname" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
            <input type="text" placeholder="|" />
            <button type="submit">
              <span class="icon">→</span>
              <span class="text">Send Message</span>
            </button>
          </form>
        </div>
      </div>
      <div className="bannerContent">
        <h1>SAFE AND SECURE</h1>
        <h4>We are a Service You Can Trust</h4>
        <NavLink  to="/contact">
          <span class="icon">→</span>
          <span class="text">Now Contact Us</span>
        </NavLink>
      </div>
    </section>
  );
};

export default Banner;
