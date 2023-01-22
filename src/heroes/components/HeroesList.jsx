import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroesCard } from './HeroesCard'

export const HeroesList = ({publisher}) => {

    const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher]) 




  return (
    <div className='row row-cols-1 row-cols-md-3 g-3'>
        {
            heroes.map( hero => (
                <HeroesCard 
                    key={hero.id}
                    {...hero}
                />
            ))
        }
    </div>
  )
}
