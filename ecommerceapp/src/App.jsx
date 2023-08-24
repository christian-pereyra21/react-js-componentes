import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={{color: 'orange', fontSize: 20}}>BASS POINT</h1>
      <h2 style={{color: 'greenyellow'}}>Productos de Alto Rendimiento</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button label={`count is ${count}`} color='violet' onClick={() => setCount((count) => count + 1)} />
        <Button label='inicio' color='red'  onClick={() => console.log("Inicio")} />
        <Button label='contactos' color='green'  onClick={() => console.log("Contacto")}/>
        <Button label ='nosotros' color='blue'  onClick={() =>console.log("Nosotros")}/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
