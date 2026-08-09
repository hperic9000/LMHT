import { useState, useEffect } from 'react'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import ContactUs from './Pages/ContactUs.jsx'
import NavBar from './Elements/NavBar.jsx'

//TODO: look into LeadConnector to implement ai and other features
function App() {
  const pages = { home: Home, about: About, contact: ContactUs }
  const [page, setPage] = useState('home') //page handler to switch between pages
  const [count, setCount] = useState(0)
  const CurrentPage = pages[page] ?? Home


  return (
    <>
      <NavBar setPage = {setPage} />
      <CurrentPage setPage = {setPage}/>
    </>    
  )
}

export default App
