import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import HAbout from './hero/HAbout'
import Test from './testimonal/Test'
import Price from '../pricing/Price'

const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutCard/>
      <HAbout/>
      <Test/>
      <Price/>
    </div>
  )
}

export default Home
