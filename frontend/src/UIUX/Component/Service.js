import React from 'react'
import HeaderSection from '../../UI/HeaderSection'
import AboutSection from '../../UI/AboutSection'
import SwiperSection from '../../UI/SwiperSection'
import OurStateSection from '../../UI/OurStateSection'
import Categories from '../../UI/Categories'
import Category from '../../UI/Category'
import CustomDevelopment from '../../UI/CustomDevelopment'
import ProcessSection from '../../UI/ProcessSection'
import {section_one,section_two, section_three,section_Four,section_Five,section_Six,section_Saven,section_Eight,section_Nine,section_Ten, section_Eleven,
  section_Twelve} from '../../UI/DynamicData';
import { useParams } from 'react-router-dom';

const Service = () => {
  const {index} = useParams() 
  const indexing = {
    fullstack:section_one,
    mobiledevlopment:section_two,
    software:section_three,
    Metadev:section_Four,
    Graphic:section_Five,
    WebDesigning:section_Six,
    design:section_Saven,
    SystemDesign:section_Eight,
    Cybersecurity:section_Nine,
    Networksecurity:section_Ten,
    Cloudsecurity:section_Eleven,
    DevOps:section_Twelve, 


  }
  return (
    <>
    <AboutSection data={indexing[index]} />
    <Categories data={indexing[index]} />
    <ProcessSection data={indexing[index]}  />
    <CustomDevelopment/>
     <OurStateSection/>
    </>
  )
}

export default Service