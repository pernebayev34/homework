import { useNavigate } from 'react-router-dom'

const UserCard = ({ user }) => {
  const navigate = useNavigate()

  return (
    <li
      onClick={() => navigate(`/user/${user.id}`)}
      className="w-64 cursor-pointer rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
    >
      <img src={user.image} className="mb-3 h-16 w-16 rounded-full" />
      <p className="font-bold text-gray-800">
        {user.firstName} {user.lastName}
      </p>
      <p className="mt-1 text-sm text-gray-500">{user.email}</p>
      <p className="text-sm text-gray-400">{user.phone}</p>
    </li>
  )
}

export default UserCard
