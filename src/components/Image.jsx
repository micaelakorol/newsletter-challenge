import React from 'react'
import { SectionImage } from '../styled-components/Image'
import Img from '../assets/images/illustration-sign-up-desktop.svg'
const Image = () => {
  return (
    <SectionImage>
      <img src={Img} alt="" className='img'/>
    </SectionImage>
  )
}

export default Image