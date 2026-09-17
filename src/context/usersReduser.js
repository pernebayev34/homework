export const initialState = {
  users: [],
  selectedUser: null,
  loading: false,
  error: null,
  query: '',
  search: '',
}

export const usersReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload }

    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false }

    case 'SET_USERS':
      return { ...state, users: action.payload, loading: false, error: null }

    case 'SET_SELECTED_USER':
      return { ...state, selectedUser: action.payload, loading: false, error: null }

    case 'SET_QUERY':
      return { ...state, query: action.payload }

    case 'SET_SEARCH':
      return { ...state, search: action.payload }

    case 'CLEAR_SELECTED_USER':
      return { ...state, selectedUser: null }

    default:
      return state
  }
}
