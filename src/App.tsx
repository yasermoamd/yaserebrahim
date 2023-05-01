import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home/Home'
import Skills from './pages/skills/Skills'

function App() {
  return (
    <>
      <Routes>
         <Route index path='/' element={<Home />} />
         <Route path='/skills' element={<Skills />} />
      </Routes>
    </>
  )
}

export default App
