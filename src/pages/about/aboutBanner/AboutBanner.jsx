import React from "react";
import { NavLink } from "react-router-dom";
import "./AboutBanner.scss"
import AboutBannerImage from "../../../assets/aboutBanner.jpg"
import AboutTeamImage from "../../../assets/images/aboutTeam.jpg"
import AboutFooterImage from "../../../assets/images/aboutFooterImage.png"
import SucsessGrayIcon from "../../../assets/icons/SucsessGrayIcon";
const AboutBanner = () => {
  return (
    <>
    <section id="aboutBanner" className="bgGray">
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
    <section>
        <div className="container p-0">
        <div className="aboutTeamImage" style={{backgroundImage:`url(${AboutTeamImage})`}}>
                <h4>Building the future of energye evolution</h4>
                <div className="overlay"></div>
            </div>
        </div>
    </section>
      <section id="aboutBanner" >
      <div className="container p-0">
       <div className="row flex-row-reverse align-items-center">
         <div className="col-lg-7">
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
            
            </div>
            <div className="contentBody">
               <div className="bodyLists">
                <ul>
                    <li><SucsessGrayIcon/> Sales and installation of generators</li>
                    <li><SucsessGrayIcon/> Sales and installation of generators</li>
                    <li><SucsessGrayIcon/> Sales and installation of generators</li>
                    <li><SucsessGrayIcon/> Sales and installation of generators</li>
                    <li><SucsessGrayIcon/> Sales and installation of generators</li>
                    <li><SucsessGrayIcon/> Sales and installation of generators</li>
                
                </ul>
               </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
            <div className="bannerImage">
                <img src={AboutBannerImage} alt="" />
            </div>
        </div>
       </div>
      </div>
    </section>
    </>
  );
};

export default AboutBanner;
