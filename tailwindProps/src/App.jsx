import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card from './component/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-red-700 text-black p-6 rounded-xl'> Dhruv Singh</h1>
      <Card name="Dhruv"/>
    </>
  )
}

export default App
