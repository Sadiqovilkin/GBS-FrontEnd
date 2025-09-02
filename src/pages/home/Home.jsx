import React from 'react'
import Banner from './banner/Banner'
import Overview from './overview/Overview'
import OurProducts from './ourProducts/OurProducts'
import HomeProject from './homeProject/HomeProject'

const Home = () => {
  return (
    <main>
        <Banner/>
        <Overview/>
        <OurProducts/>
        <HomeProject/>
    </main>
  )
}

export default Home