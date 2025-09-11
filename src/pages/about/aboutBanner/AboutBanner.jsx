import React from "react";
import { NavLink } from "react-router-dom";
import "./AboutBanner.scss"
import AboutBannerImage from "../../../assets/aboutBanner.jpg"
const AboutBanner = () => {
  return (
    <section id="aboutBanner">
      <div className="container p-0">
       <div className="row align-items-center">
         <div className="col-lg-6">
          <div className="bannerContents">
            <div className="contentHead">
              <h2>About Us </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                vel orci nec sapien laoreet suscipit. Curabitur sit amet turpis
                ac nulla dignissim feugiat. Vivamus luctus, elit a posuere
                commodo, mi lorem malesuada urna, nec faucibus magna lorem vitae
                nisi. Sed euismod, justo ut pellentesque sollicitudin, nunc eros
                dictum elit, eget fermentum nibh sem nec urna. Donec vel nisl
                non elit volutpat mattis.
              </p>
              <NavLink to="/contact">
                <span className="icon">→</span>
                <span className="text">Now Contact Us</span>
              </NavLink>
            </div>
            <div className="contentBody">
                <div className="bodyDiv">
                    <div className="txt">
                        <h4>45K+</h4>
                        <span>Transport</span>
                    </div>
                    <div className="txt">
                        <h4>45K+</h4>
                        <span>Transport</span>
                    </div>
                    <div className="txt">
                        <h4>45K+</h4>
                        <span>Transport</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
            <div className="bannerImage">
                <img src={AboutBannerImage} alt="" />
            </div>
        </div>
       </div>
      </div>
    </section>
  );
};

export default AboutBanner;
