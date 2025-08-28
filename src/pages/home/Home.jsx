import React from 'react'
import Banner from './banner/Banner'
import Overview from './overview/Overview'
import OurProducts from './ourProducts/OurProducts'

const Home = () => {
  return (
    <main>
        <Banner/>
        <Overview/>
        <OurProducts/>
    </main>
  )
}

export default Home