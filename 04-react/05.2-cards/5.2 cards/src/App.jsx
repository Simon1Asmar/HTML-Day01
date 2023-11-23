import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './component/Card'

const cardInfo = [
  {
    title:"sunrise",
    description:"The sun rise from east",
    img:"https://fthmb.tqn.com/8ZHdLsYCzE7j8nDTO0y61UtynTA=/2094x1396/filters:fill(auto,1)/portrait-if-a-spitz-pomeranian_t20_v3o29E-5ae9bbdca18d9e0037d95983.jpg",
    links:{
      link1:"https://www.facebook.com",
      link2:"https://www.google.com",
    },
  },
  {
    title:"dog",
    description:"parag2",
    img:"https://www.petsgroomingprices.com/wp-content/uploads/2015/01/cute-puppy.jpg",
    links:{
      link1:"https://www.facebook.com",
      link2:"https://www.google.com",
    },
  },
  {
    title:"ss",
    description:"The sun rise from east",
    img:"",
    links:{
      link1:"https://www.facebook.com",
      link2:"https://www.google.com",
    },
  },
]
function App() {


  return (
    <>
    <Card imgSrc={cardInfo[0].img} cardTitle={cardInfo[0].title} cardDescription={cardInfo[0].description} cardLink1={cardInfo[0].links.link1} cardLink2={cardInfo[0].links.link2}/>
    <Card imgSrc={cardInfo[1].img} cardTitle={cardInfo[1].title} cardDescription={cardInfo[1].description} cardLink1={cardInfo[1].links.link1} cardLink2={cardInfo[1].links.link2}/>
    <Card imgSrc={cardInfo[2].img} cardTitle={cardInfo[2].title} cardDescription={cardInfo[2].description} cardLink1={cardInfo[2].links.link1} cardLink2={cardInfo[2].links.link2}/>
    
    </>
  )
}

export default App
