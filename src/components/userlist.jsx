import { useUsersContext } from '../hooks/useusers'
import UserCard from './usercard'

const UserList = () => {
  const { state } = useUsersContext()
  const { users, search, loading, error } = state

  if (loading) {
    return <p className="p-4 text-gray-500">Yuklanmoqda...</p>
  }

  if (error) {
    return <p className="p-4 text-red-500">Xatolik: {error}</p>
  }

  const filtered = search.trim()
    ? users.filter((user) =>
        `${user.firstName} ${user.lastName}`
          .toLowerCase()
          .includes(search.toLowerCase()),
      )
    : users

  if (filtered.length === 0) {
    return <p className="p-4 text-gray-500">Yo'q</p>
  }

  return (
    <ul className="flex flex-wrap gap-4 p-4">
      {filtered.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  )
}

export default UserList
