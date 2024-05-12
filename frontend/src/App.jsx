import { Routes, Route } from 'react-router-dom'

import './App.css'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import Login from './pages/login/Login'

function App() {
  return (
    <div className="p-4 h-screen flex item-center justify-center">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </div>
  )
}

export default App
