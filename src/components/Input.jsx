import React, { useState } from 'react'
import { BtnSuscribe, ContainerSuscribe, EmailAdress, InputEmail } from '../styled-components/Input'

const Input = () => {
 
    const [changeColorBtn, setChangeColorBtn] = useState(false)

    // validar email...

  return (
    <ContainerSuscribe>
    <EmailAdress htmlFor="email">Email adress</EmailAdress>
    <InputEmail type="email" placeholder='email@company.com' />
    <BtnSuscribe type='submit'>Suscribe to monthly newsletter</BtnSuscribe>
    </ContainerSuscribe>
  )
}

export default Input