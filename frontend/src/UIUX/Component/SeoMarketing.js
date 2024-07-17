import React from 'react'
import HeaderSection from '../../UI/HeaderSection'
import SeoDefination from '../../UI/SeoDefination'
import SeoMater from '../../UI/SeoMater'
import SeoService from '../../UI/SeoService'
import SeoChoose from '../../UI/SeoChoose'
import SeoGetStarted from '../../UI/SeoGetStarted'
import {MarketingData_One, MarketingData_Two, MarketingData_Three, MarketingData_Four, MarketingData_Five } from '../../UI/MarketingData';
import { useParams } from 'react-router-dom'

const SeoMarketing = () => {
   const {index} = useParams ()
   const indexing = {
    SEO:MarketingData_One,
    SMM:MarketingData_Two,
    Googleads:MarketingData_Three,
    Emailmarketing :MarketingData_Four,
    SocialmediaAds : MarketingData_Five,
   }
  return (
   <>
   <SeoDefination data={indexing[index]}/>
   <SeoMater data={indexing[index]}/>
   <SeoService data={indexing[index]}/>
   <SeoChoose data={indexing[index]}/>
   <SeoGetStarted/>
   </>
  )
}

export default SeoMarketing