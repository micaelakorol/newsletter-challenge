import React from 'react'
import { SectionImage } from '../styled-components/Image'
import Desktop from '../assets/images/illustration-sign-up-desktop.svg'
import Mobile from '../assets/images/illustration-sign-up-mobile.svg'
const Image = () => {
  return (
    <SectionImage>
      <img src={Desktop} alt="" className='desktop'/>
      <img src={Mobile} alt="" className='mobile'/>
    </SectionImage>
  )
}

export default Image