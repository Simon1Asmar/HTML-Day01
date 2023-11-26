import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [counter, setCounter] = useState(0)

  function incrementCounter(){
    setCounter(counter+1)
  }

  return (
    <>
      <button onClick={incrementCounter}>increment</button>
      <p>{counter}</p>
    </>
  )
}

export default App
