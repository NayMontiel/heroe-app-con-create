import React from 'react'
import { HeroesList } from '../components'

export const MarvelPages = () => {
  return (
    <>
    <h2 className='mt-3'>Marvel Pages</h2>
    <hr />

    <HeroesList publisher='Marvel Comics' />
    
    </>
    
  )
}