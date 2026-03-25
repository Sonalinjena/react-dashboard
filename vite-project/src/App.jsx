import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserProfile from './components/UserProfile'
import Dashboard from './components/Dashboard'
import Incdec from './components/Incdec'
import SearchBar from './components/SearchBar'

function App() {
  

  return (
    <>
    <Dashboard/>
    <Incdec/>
    <SearchBar/>
    </>
  )
}

export default App
