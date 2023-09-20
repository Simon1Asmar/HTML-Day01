function printString(){
  console.log("hello")
};

function add(n1, n2){
  // console.log(n1+n2);
  const result = n1+n2;
};

add(12, 60);

function add2(n1, n2){
  const result = n1+n2;
  return result;
}

// let newNum = add2(12, 3);
// console.log(newNum)

const firstNum = add2(4, 9);
const secondNum = add2(8,8);

console.log(`${firstNum} and ${secondNum}`);

// console.log(Date.prototype.getDate())
