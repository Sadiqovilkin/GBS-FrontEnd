import React from 'react';
import './Footer.scss';
import siteLogo from '../../assets/gbsLogo.png'
import { NavLink } from 'react-router-dom';
import LocationIcon from '../../assets/icons/LocationIcon';
import EmailIcon from '../../assets/icons/EmailIcon';
import PhoneIcon from '../../assets/icons/PhoneIcon';
import InstagramIcon from '../../assets/icons/InstagramIcon';
import FaceBookIcon from '../../assets/icons/FacebookIcon';
import WhatsappIcon from '../../assets/icons/WhatsappIcon';
import LinkedinIcon from '../../assets/icons/LinkedinIcon';
const Footer = () => {
  return (
   <footer>
    <div className="container py-4">
      <div className="row  justify-content-between">
        <div className="col-lg-4">
          <div className="footerLogo">
            <img src={siteLogo} alt="" />

            <p>With over 18 years of experience in the electrical industry, GBS delivers trusted power distribution solutions built on international standards and precision engineering.</p>
          </div>
        </div>
        <div className="col-lg-2">
            <h3 className='footerLinksHeader'>Navigation</h3>
          <ul className="footerLinks">
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/product'}>Products</NavLink>
            </li>
            <li>
              <NavLink to={'/project'}>Projects</NavLink>
            </li>
            <li>
              <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
              <NavLink to={'/contact'}>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="col-lg-4">
            <div className="footerInfo">
              <div className="footerText">
                <p>
                  <LocationIcon/>
                  <span>Zira settlement, Baku, Azerbaijan</span>
                </p>
                <p>
                  <EmailIcon/>
                  <span>info@gbs.az </span>
                </p>
                <p>
                  <PhoneIcon/>
                  <span>+994 12 123 45 67 </span>
                </p>
              </div>

              <div className="footerSocial">
                <h3>Socials</h3>
                <div className="iconBox">
                 <a className="icon">
                    <InstagramIcon/>
                 </a>
                 <a className="icon">
                    <FaceBookIcon/>
                 </a>
                 <a className="icon">
                    <WhatsappIcon/>
                 </a>
                 <a className="icon">
                    <LinkedinIcon/>
                 </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
   </footer>
  )
}

export default Footer