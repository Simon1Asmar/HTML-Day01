import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function FormComp() {
  const inputRef = useRef()

  useEffect(()=>{
    inputRef.current.focus();
  },[])

  return (
    <form>
      <label htmlFor="name:">
        Name:
        <input ref={inputRef} type="text" name="name" id="name" placeholder=''/>
      </label>

    </form>
  )
}

export default FormComp