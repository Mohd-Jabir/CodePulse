import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar  from './Components/Jsx/Navbar'
import Footer from './Components/Jsx/Footer'
function App() {
  return (
    <>
       <Navbar />
      <div style={{ paddingTop: '4rem' }}>
        <Outlet />
      </div>
      <Footer/>
    </>
  )
}

export default App
