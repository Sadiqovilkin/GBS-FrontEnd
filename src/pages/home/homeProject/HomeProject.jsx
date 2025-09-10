import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  Navigation,
  Thumbs,
  Autoplay,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./HomeProject.scss";
import { projectData } from "../../../MyDatas/MyDatas";
const HomeProject = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  //   const [activeData, setActiveData] = useState(projectData[0]);
  //    const [activeImage, setActiveImage] = useState(activeData?.image);
  //      
  return (
    <section id="homeProject">
      <div className="container">
        <div className="row">
          <div className="col-7">
            <div className="sectionHeader">
              <h2>Our Project</h2>
            </div>
          </div>
        </div>
        <Swiper
         slidesPerView={1}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
          className="mySwiperProject"
        >
          {projectData.map((item, i) => {
            // const [activeImage, setActiveImage] = useState(item.image);

            return (
              <SwiperSlide key={i} className="mainSwiper">
                <div className="sliderImage">
                  {/* <img src={activeImage} alt="" className="mainImage" /> */}
                  <img src={item?.image} alt="" className="mainImage" />

                    <div className="overlay"></div>
                  {/* <div className="sliderOtherImages">
                    {item.images.map((img, index) => (
                      <div
                        key={index}
                        className={`otherImage ${
                          img === activeImage ? "active" : ""
                        }`}
                        onClick={() => setActiveImage(img)} // kliklə dəyişsin
                      >
                        <img src={img} alt="" />
                      </div>
                    ))}
                  </div> */}
                </div>
                  <div className="sliderContent">
                    <h3>{item?.title}</h3>
                    <p>{item?.description}</p>
                  </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={3000}
          modules={[Autoplay, FreeMode, Navigation, Thumbs]}
          className="mt-4 thumbsSwiperProject"
        >
          {projectData.map((item, i) => (
            <SwiperSlide key={i} className="cursor-pointer">
              <div className="sliderImage">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover rounded-xl border"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <h2>Layihələrimiz</h2>
        <p>
          GBS MMC olaraq, müştərilərimizin ehtiyaclarına uyğun yüksək keyfiyyətli
          və etibarlı soyuducu kameralar təqdim edirik. Layihələrimiz arasında
          müxtəlif sənaye sahələri üçün fərqli həllər mövcuddur.
        </p> */}
      {/* <div className="container">
        <div className="mySwiperProject">
            <div className="mainSwiper">
                <div className="sliderImage">   
                  <img src={activeImage} alt="" className="mainImage" />

                  <div className="sliderOtherImages">
                    {activeData?.images.map((img, index) => (
                      <div
                        key={index}
                        className={`otherImage ${
                          img === activeImage ? "active" : ""
                        }`}
                        onClick={() => setActiveImage(img)} // kliklə dəyişsin
                      >
                        <img src={img} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
        </div>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="thumbsSwiperProject mt-4"
      >
       {projectData.map((item, i) => (
            <SwiperSlide onClick={()=>{
                setActiveData(item);
                console.log(item);
            }} key={i} className="cursor-pointer">
              <div className="sliderImage">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover rounded-xl border"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      </div> */}
    </section>
  );
};

export default HomeProject;
