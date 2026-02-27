import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './assets/logo.png'
import { ArchiveIcon, BagIcon } from '@phosphor-icons/react'
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={Main}/>
    </Routes>
  )
}

export default App
