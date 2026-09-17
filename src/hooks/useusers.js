import { useCallback, useContext } from 'react'
import { UsersContext } from '../context/usersContext'
import { fetchUsers, fetchUserById } from '../api/usersApi'

export const useUsersContext = () => {
  const context = useContext(UsersContext)
  if (!context) {
    throw new Error('useUsersContext must be used within a UsersProvider')
  }
  return context
}

export const useUsers = () => {
  const { state, dispatch } = useUsersContext()

  const loadUsers = useCallback(async () => {
    dispatch({ type: 'SET_LOADING', payload: true })
    try {
      const users = await fetchUsers()
      dispatch({ type: 'SET_USERS', payload: users })
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message })
    }
  }, [dispatch])

  const loadUserById = useCallback(async (id) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    try {
      const user = await fetchUserById(id)
      dispatch({ type: 'SET_SELECTED_USER', payload: user })
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message })
    }
  }, [dispatch])

  const setQuery = useCallback((query) => {
    dispatch({ type: 'SET_QUERY', payload: query })
  }, [dispatch])

  const clearSelectedUser = useCallback(() => {
    dispatch({ type: 'CLEAR_SELECTED_USER' })
  }, [dispatch])

  return {
    users: state.users,
    selectedUser: state.selectedUser,
    loading: state.loading,
    error: state.error,
    query: state.query,
    loadUsers,
    loadUserById,
    setQuery,
    clearSelectedUser,
  }
}