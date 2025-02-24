import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { CustomRightArrow } from '../components/Hero/CustomRightArrow';
import { CustomLeftArrow } from '../components/Hero/CustomLeftArrow';
import { images } from '../assets/banner';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const Hero = () => {
  return (
    <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000}  keyBoardControl={true} customRightArrow={<CustomRightArrow/>} customLeftArrow={<CustomLeftArrow/>} className='z-0'>
    <img src={images.banner1} alt="" className='w-full h-[600px] object-cover'/>
    <img src={images.banner2} alt="" className='w-full h-[600px] object-cover'/>
    <img src={images.banner3} alt="" className='w-full h-[600px] object-cover'/>
    <img src={images.banner4} alt="" className='w-full h-[600px] object-cover'/>
    <img src={images.banner5} alt="" className='w-full h-[600px] object-cover'/> 
  </Carousel>
  )
}

export default Hero
