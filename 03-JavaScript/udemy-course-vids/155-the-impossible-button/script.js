const btn = document.querySelector("button");

btn.addEventListener("mouseover", ()=>{
  console.log("MOUSED OVER ME!");

  let randomWidth = Math.floor(Math.random() * window.innerWidth);
  let randomHeight = Math.floor(Math.random() * window.innerHeight);

  btn.style.left = `${randomWidth}px`;
  btn.style.top = `${randomHeight}px`;
  
})

btn.addEventListener("click", ()=>{
  document.body.style.backgroundColor = "green";
  console.log("YOU GOT ME!");
})