import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { images } from '../assets';
import { CustomRightArrow } from '../components/Hero/CustomRightArrow';
import { CustomLeftArrow } from '../components/Hero/CustomLeftArrow';

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
    <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000}  keyBoardControl={true} customRightArrow={<CustomRightArrow/>} customLeftArrow={<CustomLeftArrow/>}>
    <img src={images.bannerimgFive} alt="" className='w-full h-[600px] object-cover'/>
    <img src={images.bannerimgTwo} alt="" className='w-full h-[600px] object-cover'/>
    <img src={images.bannerimgThree} alt="" className='w-full h-[600px] object-cover'/>
    <img src={images.bannerimgFour} alt="" className='w-full h-[600px] object-cover'/>
    <img src={images.bannerimgone} alt="" className='w-full h-[600px] object-cover'/> 
  </Carousel>
  )
}

export default Hero
