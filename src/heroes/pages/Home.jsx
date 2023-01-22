import React from 'react';
import marvelDc from '../../assets/img/marvelDc.png'


export const Home = () => {

  // const banner = `/assets/img/marvelDc.png`

  return (

    <div className='animate__animated animate__bounce'>
        
    <h1 className='text-center mt-5'>Heroes App</h1>

    <div>
      <img src={marvelDc} alt={marvelDc} className='w-100 h-50' />
    </div>
    </div>
    
  )
}
