import { useState } from 'react'
import Home from './Pages/Home.jsx'
import NavBar from './Elements/NavBar.jsx'

//TODO: Add routing to switch between pages
//TODO: look into LeadConnector to implement ai and other features
function App() {
  const [page, setPage] = useState('home') //page handler to switch between pages
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar setPage = {setPage} />
      <Home />
    </>    
  )
}

export default App
