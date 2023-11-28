import React, { useRef } from 'react'

import './ColorToggleImg.css'

function ColorToggleImg(props) {

  const imageRef = useRef();

  const setGreyscale = () =>{
    imageRef.current.className = "greyscale";
  }

  return (
    <img ref={imageRef} src={props.source} alt={props.altText} onMouseEnter={setGreyscale} onMouseLeave={() => imageRef.current.className=""}/>
  )
}

export default ColorToggleImg