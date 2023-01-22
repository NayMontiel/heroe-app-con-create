import React, { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { AuthReduce } from './AuthReduce'





export const AuthProvider = ({children}) => {
    
    const init = () => {
      const user = JSON.parse(localStorage.getItem('user'));


      return {
        logged: !!user,
        user
      }
    }

    const [state, dispatch] = useReducer( AuthReduce ,{}, init);

    const login = (name = '') => {
      const user = {id: '123', name}

      const action = { type: types.login, payload: user }

      localStorage.setItem('user', JSON.stringify(user))

        dispatch(action);
    }

    const logout = () => {
      localStorage.removeItem('user');
      
      const action ={ types: types.logout}

      dispatch(action)
    }


  return (
    <AuthContext.Provider value={{ ...state ,login: login, logout: logout}}>
        {children}
    </AuthContext.Provider>
  )
}
