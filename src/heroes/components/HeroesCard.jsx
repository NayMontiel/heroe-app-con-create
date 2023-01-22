import React from 'react'
import { Link } from 'react-router-dom'

export const HeroesCard = ({ 
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}) => {

    const heroesImagen = `/heroes/${ id }.jpg`

  return (
    <div className='col animate__animated animate__fadeInUp'>
    <div className='card'>
        <div className='row no-gutters'>
            <div className='col-4'>
                <img src={heroesImagen} alt={superhero} className='card-img' />
            </div>
            <div className='col-8'>
                <div className='card-body'>
                    <h5 className='card-title'>{superhero}</h5>
                    <p className='card-text text-dark'>{alter_ego}</p>
                    {
                        (alter_ego !== characters) && ( <p className='text-dark'>{characters}</p>)
                    }

                    <p className='card-text text-secondary'>
                        <small className='text-muted'>{first_appearance}</small>
                    
                    </p>

                    <Link to={`/heroe/${ id}`}>
                        Más Info...
                    </Link>
                   
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
