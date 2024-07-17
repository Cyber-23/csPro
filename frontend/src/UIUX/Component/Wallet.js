import React from 'react'
import CryptoDefination from '../../UI/CryptoDefination'
import CryptoOffering from '../../UI/CryptoOffering'
import CryptoInformation from '../../UI/CryptoInformation'
import CryptoChoose from '../../UI/CryptoChoose'
import CryptoGetStarted from '../../UI/CryptoGetStarted'
import HeaderSection from '../../UI/HeaderSection'
import { useParams } from 'react-router-dom'
import { CryptoData_One, CryptoData_Two, CryptoData_Three, CryptoData_Four, CryptoData_Five,  CryptoData_Six,  CryptoData_Seven } from '../../UI/CryptoData'


const Wallet = () => {
    const {index} = useParams ()
    const indexing = {
        cryptocurrency: CryptoData_One,
        whitewallet: CryptoData_Two,
        web3: CryptoData_Three,
        deFi: CryptoData_Four,
        blockchain: CryptoData_Five,
        P2Pwallet : CryptoData_Six,
        centralizedwallet : CryptoData_Seven,
    }
  return (
    <>
    <CryptoDefination data={indexing[index]}/>
    <CryptoOffering data={indexing[index]}/>
    <CryptoInformation data={indexing[index]}/>
    <CryptoChoose data={indexing[index]}/>
    <CryptoGetStarted/>
    </>
  )
}

export default Wallet