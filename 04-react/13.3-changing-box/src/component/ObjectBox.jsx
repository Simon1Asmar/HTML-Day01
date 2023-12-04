import React from 'react'
import './ObjectBox.css'
import { useEffect } from 'react'
import { useState } from 'react'

function ObjectBox() {
  const colorsArray = ["green", "red", "purple", "orange", "yellow"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [currentColor, setCurrentColor] = useState(colorsArray[currentColorIndex]);
  const [currentShape, setCurrentShape] = useState("box");
  const [changeCounter, setChangeCounter] = useState(0);

  useEffect(() => {

    const switchShape = () =>{
      if(currentShape === "box"){
        setCurrentShape("circle");
      } else {
        setCurrentShape("box");
      }
    }

    const timeoutId = setTimeout(() => {

      if(changeCounter <= 100){
        setCurrentColorIndex(prevIndex => (prevIndex + 1) % colorsArray.length);
        setCurrentColor(colorsArray[currentColorIndex]);
  
        setChangeCounter(changeCounter+1);
        console.log('colorChangeCounter', changeCounter)
  
        if ((changeCounter % 5 === 0) && (changeCounter != 0)) {
          // setCurrentShape("circle");
          switchShape();
        }

      }


    }, 500);

    return () => clearTimeout(timeoutId); // Clear the timeout on component unmount
  }, [currentColorIndex]);

  return (
    <main>
      <div className={`${currentShape} ${currentColor}`}></div>
    </main>
  )
}

export default ObjectBox
