import React from 'react'
import NavBar from './components/NavBar.jsx'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import {Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
      </Routes>
    </div>
  )
}

export default App