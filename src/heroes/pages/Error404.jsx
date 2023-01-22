import React from 'react'
import { Link } from 'react-router-dom'

export const Error404 = () => {
  return (
    <div className='d-flex flex-column mt-5'>
        <h1 className='text-danger mt-5 text-center '>Error404</h1>
        <Link to='/' className='btn btn-outline-dark mt-5 w-25 btn-error'>Home</Link>
    </div>
  )
}
