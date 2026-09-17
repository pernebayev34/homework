const BASE_URL = 'https://dummyjson.com/users'

export const fetchUsers = async () => {
  const response = await fetch(`${BASE_URL}?limit=12`)
  const data = await response.json()
  return data.users
}

export const fetchUserById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`)
  const data = await response.json()
  return data
}
