import { Navbar } from '@molecules/Navbar'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <h1>Bonjour</h1>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </>
  )
}

export default App
