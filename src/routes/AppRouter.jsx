import { Route, Routes } from 'react-router-dom'

import { Login } from '../auth/pages/Login'

import { HeroesRotes } from '../heroes/routes/HeroesRotes'
import { PrivateRouter } from './PrivateRouter'



export const AppRoute = () => {
  return (
    <>
        <Routes>
            
           <Route path='/login' element={ <Login />} />
          

            <Route path='/*' element={
              <PrivateRouter>
                <HeroesRotes />
              </PrivateRouter>
              } 
            />
          
        </Routes>
    </>
  )
}
