import { useState } from 'react'
import './App.css'
//import Button from './components/Button/Button'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemList from './components/ItemList/ItemList'
import Item from './components/Item/Item'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>

    </div>
  )
}

export default App
