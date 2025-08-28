import React from 'react'
import "./OurProducts.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { productsData } from '../../../MyDatas/MyDatas';
import { NavLink } from 'react-router-dom';
const OurProducts = () => {
  return (
    <section id='ourProducts'>
        <div className="container">
 <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}
        className="productsSwiper"
        id='slider_tab'
      >
        {productsData?.map((item)=>(
        <SwiperSlide key={item.id}>
            <NavLink to={`/product/${item?.id}`}>

            <div className="productsCard">
                <div className="cardImage">
                    <img src={item?.image} alt="" />
                </div>
                <div className="cardContent">
                    <h4>{item?.title}</h4>
                    <p>{item?.description}</p>
                </div>
            </div>
            </NavLink>
        </SwiperSlide>
        ))}
        
       </Swiper>
        </div>
    </section>
  )
}

export default OurProducts