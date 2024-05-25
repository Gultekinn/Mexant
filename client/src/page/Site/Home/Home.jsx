import React from 'react'
import Cards from '../../../component/Site/Section2/Cards'
import Carousel from '../../../component/Site/Section1/Carousel'
import { Section3 } from '../../../component/Site/SectionThree/Section3'
import Sectionabout from '../../../component/Site/SectionAbout/Sectionabout'
import Card from '../../../component/Site/Card/Card'

const Home = () => {
  return (
    <div>
      <Carousel/>
      <Cards/>
      <Section3/>
      <Sectionabout/>
      <Card/>
    </div>
  )
}

export default Home
