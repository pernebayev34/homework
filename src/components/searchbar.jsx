import { useUsersContext } from '../hooks/useusers'

const SearchBar = () => {
  const { state, dispatch } = useUsersContext()

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      dispatch({ type: 'SET_SEARCH', payload: state.query.trim() })
    }
  }

  return (
    <div className="flex items-center gap-2 p-4">
      <input
        type="text"
        placeholder="Search users..."
        value={state.query}
        onChange={(event) =>
          dispatch({ type: 'SET_QUERY', payload: event.target.value })
        }
        onKeyDown={handleKeyDown}
        className="rounded border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
      />
    </div>
  )
}

export default SearchBar