function calculateCircleArea(radius){
  return (Math.PI * Math.pow(radius, 2));
}

console.log("Area = " +calculateCircleArea(2));
console.log("Area = " +calculateCircleArea(2).toFixed(2));