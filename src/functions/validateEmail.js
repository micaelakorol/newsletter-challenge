import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const validateEmail = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const emailForm = () => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(email)|| email == '') {
          setError('Valid email required');  
      } 
      else {
        setTimeout(() => {
          navigate('/success', { replace: true });
        }, 1000);
        setError('');
      }
    };
  
    const handleChange = (event) => {
      setEmail(event.target.value);
    };

  return {handleChange,emailForm,error,setError, email, setEmail}
}

export default validateEmail