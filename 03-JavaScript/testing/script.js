const listOfNeighbours = [
  ["Canada", "Mexico"], //0
  ["Spain"], //1
  ["Norway", "Sweden", "Russia"], //2
  ];

  console.log(listOfNeighbours.length)

  for(let i = 0; i<listOfNeighbours.length;i++){ //i=0
    // console.log(`i=${i}: listOfNeighbours[${i}]=`+listOfNeighbours[i])  //listOfNeighbours[0] ---- ["canada", "Mexico"]

    //listOfNeighbours[0].length == 2
    // console.log(listOfNeighbours[i].length)
    innerArray = listOfNeighbours[i]
    for(let j=0; j<innerArray.length; j++){
      console.log(innerArray[j])
    }

  }