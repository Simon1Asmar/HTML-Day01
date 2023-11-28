import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import pic1 from "/images/namibia-1.jpg"

import ColorToggleImg from './components/ColorToggleImg'

function App() {

  return (
    <>
    <section className='container'>
      <ColorToggleImg source="/images/namibia-1.jpg" altText="a picture of a tree in Namibia"/>
      <ColorToggleImg source="/images/kenya-antelope.jpg" altText="a picture of an antelope funning in nature in Kenya"/>
    </section>
    </>
  )
}

export default App
