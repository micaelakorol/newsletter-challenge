import React from 'react'
import { useState } from 'react';

const validateEmail = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false)
  
    const emailForm = () => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(email)) {
          setError('Ingrese un correo electrónico válido');  
      } else {
        setError('');
      }
    };
  
    const handleChange = (event) => {
      setEmail(event.target.value);
    };

  return {handleChange,emailForm,error,setError, email, setEmail}
}

export default validateEmail