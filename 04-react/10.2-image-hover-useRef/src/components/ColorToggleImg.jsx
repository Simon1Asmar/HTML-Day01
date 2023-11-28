import React, { useRef } from 'react'

import './ColorToggleImg.css'

function ColorToggleImg(props) {

  const imageRef = useRef();

  const setGreyscale = () =>{
    imageRef.current.className = "greyscale";
  }
  
  const removeGreyscale = () => {
    imageRef.current.className = "";
  }

  return (
    <img ref={imageRef} className='greyscale' src={props.source} alt={props.altText} onMouseEnter={removeGreyscale} onMouseLeave={setGreyscale}/>
  )
}

export default ColorToggleImg