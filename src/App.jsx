import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import {Layout} from './components/shared/Layout'
import {Dashboard} from './components/Dashboard/Dashboard'
import {Notion} from './components/Notion/Notion'
import {Chatgpt} from './components/Chatgpt/Chatgpt'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='notion' element={<Notion />} />
          <Route path='chatgpt' element={<Chatgpt/>}/>
        </Route>
        <Route path ='login' element={<div>Login</div>} />
      </Routes>
    </Router>
  )
}
