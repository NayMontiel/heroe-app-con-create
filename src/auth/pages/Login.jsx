import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const Login = () => {
  
  const navegate = useNavigate();

  const {login} = useContext(AuthContext);

  const onlogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Nay Montiel')

    navegate(lastPath, {replace:true})
  }


  return (
    <div className='container mt-5'>
      <h2 className='mt-3'>Login</h2>
      <hr />

      <button 
        className='btn btn-primary'
        onClick={onlogin}
      >
        Login
      </button>
    </div>
    
  )
}
