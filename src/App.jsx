import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Project from './pages/Project'
import Skills from "./pages/Skills"
import Hireme from "./pages/Hireme"
import Experience from "./pages/Experience"

const App = () => {
  

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/project' element={<Project />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/hire' element={<Hireme />} />
      <Route path='/experience' element={<Experience />} />

      
    </Routes>
  )
}

export default App