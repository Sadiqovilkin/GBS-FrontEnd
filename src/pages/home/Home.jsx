import React from 'react'
import Banner from './banner/Banner'
import Overview from './overview/Overview'
import OurProducts from './ourProducts/OurProducts'
import HomeProject from './homeProject/HomeProject'
import SliderComponent from '../../components/sliderComponent/SliderComponent'
import { consumersData, partnersData } from '../../MyDatas/MyDatas'

const Home = () => {
  return (
    <main>
        <Banner/>
        <Overview/>
        <OurProducts/>
        <HomeProject/>
        <SliderComponent data={partnersData} title="Our Partners"/>
        <SliderComponent data={consumersData} title="Our Consumers"/>
    </main>
  )
}

export default Home