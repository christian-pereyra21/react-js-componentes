import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import NavBar from './components/navBar/navBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 style= {{color:"orange"}}>Bass Point</h1>
      <h2 style={{color:"lightblue"}}>Vibra a tu ritmo</h2>
      <NavBar/>

    </div>
  )
}

export default App
