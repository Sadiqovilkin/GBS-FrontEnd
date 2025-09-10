import React, { useEffect, useState } from "react";
import SucsessGrayIcon from "../../../assets/icons/SucsessGrayIcon";
import "./DetailBanner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";

const DetailBanner = ({data}) => {

  // Əgər məhsul tapılmasa, boş səhifə göstər
  if (!data) {
    return (
      <section id="detailBanner">
        <div className="container">
          <h2>Product not found</h2>
        </div>
      </section>
    );
  }
   const [activeImage, setActiveImage] = useState(data.image);

  useEffect(() => {
    setActiveImage(data.image); // ✅ məhsul dəyişəndə əsas şəkil reset olsun
  }, [data]);
  return (
    <section id="detailBanner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="productDetailedContents">
              <h2>{data?.title}</h2>
              <p>
                SIVACON 8PT technology panels, distinguished by their
                versatility and reliability for electrical power distribution,
                are manufactured according to Siemens specifications. They are
                distinguished by their long-term operation, modular construction
                and safety standards.
              </p>

              <ul>
                {data?.features?.map((item,i)=>(

                <li>
                  <SucsessGrayIcon />
                  {item}
                </li>

                ))}
                
              </ul>
               <NavLink  to="/contact">
                        <span className="icon">→</span>
                        <span className="text">Now Contact Us</span>
                      </NavLink>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="detailSlider">
              <div className="mainSwiper">
                <div className="sliderImage">
                  <img src={activeImage} alt="" className="mainImage" />
                </div>
              </div>
              <Swiper
                slidesPerView={4}
                spaceBetween={10}
                // pagination={{
                //   clickable: true,
                // }}
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
                    slidesPerView: 5.5,
                    spaceBetween: 10,
                  },
                }}
                modules={[Pagination]}
                className="thumbsSwiperProject mt-4"
              >
                {data?.images?.map((img, i) => (
                  <SwiperSlide
                    onClick={() => {
                      setActiveImage(img);
                    }}
                    key={i}
                  >
                    <div className="sliderImage">
                      <img
                        src={img}
                        alt={data?.title}
                       />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailBanner;
