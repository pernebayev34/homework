import { useEffect } from 'react'
import { useUsers } from '../hooks/useusers'
import UserList from '../components/userlist'
import SearchBar from '../components/searchbar'

const UsersPage = () => {
  const { loadUsers } = useUsers()

  useEffect(() => {
    loadUsers()
  }, [loadUsers])

  return (
    <div>
      <SearchBar />
      <UserList />
    </div>
  )
}

export default UsersPage