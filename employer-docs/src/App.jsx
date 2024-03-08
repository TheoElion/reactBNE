import './App.css'
import Footer from './components/Footer/Footer'

// Config React Router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Components
import NavBar from './components/NavBar/NavBar'
import SideMenu from './components/SideMenu/SideMenu'

// Pages
import Home from './pages/Home'
import Manut1 from './pages/Manut 1.0/Manut1'
import Sobre from './pages/ReportsBNE/Sobre'

function App() {

  return (
    <>
      <div className='main'>
        <BrowserRouter>
          <NavBar />
          <SideMenu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/manut1.0' element={<Manut1 />} />
            <Route path='/reportsBNE/sobre' element={<Sobre />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  )
}

export default App
