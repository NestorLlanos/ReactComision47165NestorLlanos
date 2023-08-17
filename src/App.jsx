import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Button from './components/Button/Button'
import Count from './components/Count/Count' 
import ItemListContainer from './components/ItemsListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <NavBar/>
       <ItemListContainer greeting={'Bienvenidos a nuestro Ecommerce'}/>
      </div>
      <Count/>
      <Button lavel='Inicio' color='green' />
      <Button lavel='Productos' color='magenta' />
      <Button lavel='Contacto' color='red' />
      
    </>
  )
}

export default App
