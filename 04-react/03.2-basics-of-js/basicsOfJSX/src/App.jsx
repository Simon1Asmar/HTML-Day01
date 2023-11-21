import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const data = ["hello", "world"];


  const number1 = 5;
  const number2 =6;


  const string = "I love React!"

  return (
    <>
      <p>
        {data[0]} {data[1]}
      </p>
      <p>{number1} + {number2} = {number1 + number2}</p>
      <p>The string’s length is {string.length}</p>
    </>
  )
}

export default App
