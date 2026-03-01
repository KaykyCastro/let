import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import { Layout } from './components/Layout'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  

  return (
    <Routes>
      <Route element={<Layout/>}>
      <Route path='/' element={<Main/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      </Route>
    </Routes>
  )
}

export default App
