import React from 'react'
import './HomeWrapper.scss'
import { NavLink } from 'react-router-dom'
const HomeWrapper = () => {
  return (
    <section id='homeWrapper'>
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-5">
                    <div className="miniWrapperCard">
                            <div className='cardText'>
                                <div className="cardList">
                                    <span >UP NEXT</span>
                                    <span>|</span>
                                    <span>ABOUT US</span>
                                   
                                    
                                </div>
                                <h3>Ipsum is simply dummy text of the printing </h3>
                            </div>
                            <div className='cardBtns'>
                        <NavLink  to="/contact">
                               <span class="icon">→</span>
                               <span class="text">Now Contact Us</span>
                             </NavLink>
                            </div>
                    </div>
                </div>
                <div className="col-lg-7">
                      <div className="wrapperCard">
                            <div className='cardText'>
                                <div className="cardList">
                                    <span >UP NEXT</span>
                                    <span>|</span>
                                    <span>ABOUT US</span>
                                   
                                    
                                </div>
                                <h3>Lorem Installation of Frequency Converter Control Systems</h3>
                            </div>
                            <div className='cardBtns'>
                        <NavLink  to="/contact">
                               <span class="icon">→</span>
                               <span class="text">Now Contact Us</span>
                             </NavLink>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeWrapper