import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import UsersPage from './pages/usersPage'
import UserDetailPage from './pages/userdetailpage'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/user/:id" element={<UserDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
