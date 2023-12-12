import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Auth from './pages/cabinet/Auth'
import Reg from './pages/cabinet/Reg'

function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/register" element={<Reg />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
