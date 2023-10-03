const numbers = [1, -5, 666, 2, 400, 11];

console.log("Ascending Order = " + numbers.sort((a,b)=>{
  return a - b;
}));

//Different way
console.log("Decending Order = " + numbers.sort((a,b)=>{
  return b - a;
}));