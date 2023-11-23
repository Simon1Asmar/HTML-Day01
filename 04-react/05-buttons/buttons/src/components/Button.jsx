import React from 'react'

import './Button.css'

function Button(props) {
  console.log(props);
  return (
    <button className={props.className}>{props.buttonText}</button>
  )
}

export default Button