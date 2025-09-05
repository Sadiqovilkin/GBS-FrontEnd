import React, { useEffect, useState } from 'react'
import './MainSection.scss'
import { useParams } from 'react-router-dom';
import { projectData } from '../../../MyDatas/MyDatas';
const MainSection = () => {
  const {slug} = useParams();

  const detailedProject = projectData.find(item => item.id === slug);
  const [activeImage, setActiveImage] = useState(detailedProject?.image);
       useEffect(()=>{
      setActiveImage(detailedProject?.image)
  },[detailedProject])
  return (
    <section id='mainSection'>
      <div className="bannerImage">
        <div className="sliderImage">   
                  <img src={activeImage} alt="" className="mainImage" />

                  <div className="sliderOtherImages">
                    {detailedProject?.images.map((img, index) => (
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
                  <div className="overlay">
                  </div>
                  <div className="sliderContent">
                    <h3>{detailedProject?.title}</h3>
                    <p>{detailedProject?.description}</p>
                  </div>
                </div>
      </div>
     <div className="container mt-5">
       <div className="projectDescription">
        <h3>
          {detailedProject?.title}
        </h3>
        <p>
          {detailedProject?.description}
        </p>
      </div>
     </div>
    </section>
  )
}

export default MainSection