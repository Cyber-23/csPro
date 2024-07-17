import React from 'react'
import Generative from '../../UI/Generative'
import AiSolution from '../../UI/AiSolution'
import Industries from '../../UI/Industries'
import Serve from '../../UI/Serve'
import GetStarted from '../../UI/GetStarted'
import {AiSection_One, AiSection_Two, AiSection_Three, AiSection_Four, AiSection_Five} from '../../UI/AiData';
import { useParams } from 'react-router-dom'
import HeaderSection from '../../UI/HeaderSection'
const AiService = () => {
  const {index} = useParams ()
  const indexing = {
    genai: AiSection_One,
    ImageProcessing: AiSection_Two,
    MachineLearning: AiSection_Three,
    NaturalLearning: AiSection_Four,
    DeepLearning: AiSection_Five

  }        
  return (
   <>
   <Generative data={indexing[index]}/>
   <AiSolution data={indexing[index]}/>
   <Serve data={indexing[index]}/>
   <Industries/>
   <GetStarted/>
   </>
  )
}

export default AiService