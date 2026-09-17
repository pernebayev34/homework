import { createContext, useReducer } from 'react'
import { usersReducer, initialState } from './usersReduser'

export const UsersContext = createContext()

export const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState)

  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      {children}
    </UsersContext.Provider>
  )
}