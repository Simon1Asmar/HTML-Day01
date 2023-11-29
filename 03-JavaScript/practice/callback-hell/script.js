//Selecting DOM Element
const div = document.querySelector("div");

//Waits 5 seconds
setTimeout(()=>{
  //changes div's background color to red
  div.classList.add("red-bg");

  //Waits 5 seconds
  setTimeout(()=>{
    //Changes font size to 50px
    div.classList.add("fontsize-50px");

    //Waits 5 seconds
    setTimeout(()=>{
      //changes the background color to purple
      div.classList.remove("red-bg");
      div.classList.add("purple-bg");

      //Waits 5 seconds
      setTimeout(()=>{
        //adds "callback hell" to the inner text
        div.innerText = div.innerText + " callback hell";
        
      }, 5000);
      
    }, 5000);

  }, 5000);

},5000);