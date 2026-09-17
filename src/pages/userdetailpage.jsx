import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useUsers } from '../hooks/useusers'

const UserDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { selectedUser, loading, error, loadUserById, clearSelectedUser } = useUsers()

  useEffect(() => {
    loadUserById(id)

    return () => clearSelectedUser()
  }, [id, loadUserById, clearSelectedUser])

  if (loading) {
    return <p className="p-4 text-gray-500">Yuklanmoqda...</p>
  }

  if (error) {
    return <p className="p-4 text-red-500">Xatolik: {error}</p>
  }

  if (!selectedUser) {
    return null
  }

  return (
    <div className="p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
      >
        ← Orqaga
      </button>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <img
          src={selectedUser.image}
          className="mb-4 h-24 w-24 rounded-full"
        />
        <h2 className="text-2xl font-bold text-gray-800">
          {selectedUser.firstName} {selectedUser.lastName}
        </h2>
        <p className="mt-2 text-gray-500">{selectedUser.email}</p>
        <p className="text-gray-400">{selectedUser.phone}</p>
        <p className="mt-2 text-gray-600">Yosh: {selectedUser.age}</p>
        <p className="text-gray-600">Manzil: {selectedUser.address?.address}</p>
        <p className="text-gray-600">Shahar: {selectedUser.address?.city}</p>
      </div>
    </div>
  )
}

export default UserDetailPage
