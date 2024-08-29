import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './pages/Header'
import Home from './pages/Home'
import Aboutme from './pages/Aboutme'
import Services from './pages/Services'
import Mywork from './pages/Mywork'
import Contactme from './pages/Contactme'
// import Footer from './pages/Footer'

const App = () => {
  return (
    <div>
    <Header></Header>  
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/Aboutme" element={<Aboutme />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Mywork" element={<Mywork />} />
      <Route path="/Contactme" element={<Contactme />} />
      {/* <Route path="/Footer" element={<Footer />} /> */}
    </Routes>
    </div>
  )
}

export default App