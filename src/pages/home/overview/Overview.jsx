import React, { useState } from "react";
import { overviewData } from "../../../MyDatas/MyDatas";
import Fancybox from "../../../components/fancybox/Fancybox";
import playIcon from "../../../assets/icons/playIcon.png";
import "./Overview.scss";
import { NavLink } from "react-router-dom";
const Overview = () => {
  const [openId, setOpenId] = useState(overviewData[0].id);

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const currentItem = overviewData.find((item) => item.id === openId);

  return (
    <section id="overview">
      <div className="container">
         <div className="row">
          <div className="col-7">
            <div className="sectionHeader">
          <h2>Product Overview</h2>
          <p>
            Discover our wide range of certified and reliable power distribution solutions. Each system is custom-built to meet your project’s unique requirements.
          </p>
        </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div className="accardionButtons">
              {overviewData?.map((item) => (
                <div
                  key={item.id}
                  className={`accordionItem ${
                    openId === item.id ? "active" : ""
                  }`}
                  onClick={() => toggleAccordion(item.id)}
                >
                  <div
                    className="accardionHeader"
                    
                  >
                    <span>
                      {/* <img className="miniLogo" src={playIcon} alt="" /> */}
                      {item.title}
                    </span>
                  </div>

                  {openId === item.id && (
                    <div className="accardionContent">
                      <div>{item.description}</div>
                      <div className="accardionImages">
                        {item.images?.map((img, index) => (
                          <img key={index} src={img} alt="" />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-7">
            <div className="acardionVideo">
                <div className="videoContent">
                    <div className="texts">
                        <h3>Lorem</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content</p>
                    </div>
                     <NavLink className="viewButton"  to="/contact">
                              <span className="icon">→</span>
                              <span className="text">View</span>
                            </NavLink>
                </div>
              <div className="playIcon">
                <Fancybox>
                  <a
                    href="https://www.youtube.com/watch?v=C124rASVHLw"
                    data-fancybox="gallery"
                    className="videoImg imageSize-700"
                  >
                    <div className="icon">
                        <img src={playIcon} alt="" />
                    </div>
                  </a>
                </Fancybox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
