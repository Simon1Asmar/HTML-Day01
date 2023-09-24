function printBoom(n){
  let strToPrint = "";
  for(let i = 1; i <= n; i++){
    if(i%7 === 0){
      if(i.toString().includes("7")){
        //BOOM-BOOM
        strToPrint+="BOOM-BOOM,";
      } else {
        //BOOM
        strToPrint+="BOOM,";
      }
    } else {
      strToPrint+=i+",";
    }
  }

  console.log(strToPrint);
}

printBoom(30);