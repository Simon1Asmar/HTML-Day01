import React, { useState } from 'react'

import './ShowHide.css'

function ShowHide() {

  const [isShowing, setIsShowing] = useState(false);
  
  function changeBool(){
    setIsShowing(isShowing => !isShowing);
  }

  return (
    <section className='show-hide-container'>
      <button onClick={changeBool}>Show/Hide</button>
      {isShowing && <div className='box'></div>}
    </section>
  )
}

export default ShowHide