import React from 'react'
import { SectionImage } from '../styled-components/Image'
import Desktop from '../assets/images/illustration-sign-up-desktop.svg'
import Mobile from '../assets/images/illustration-sign-up-mobile.svg'
const Image = () => {
  return (
    <SectionImage>
      <img src={Desktop} alt="image-desktop" className='desktop'/>
      <img src={Mobile} alt="image-mobile" className='mobile'/>
    </SectionImage>
  )
}

export default Image