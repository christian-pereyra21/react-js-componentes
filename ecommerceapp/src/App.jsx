import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import NavBar from './components/navBar/navBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>

    </div>
  )
}

export default App
