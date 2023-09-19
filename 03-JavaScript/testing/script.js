function printString(){
  console.log("hello")
};

function add(n1, n2){
  console.log(n1+n2);
};

add(12, 60);

function add2(n1, n2){
  return n1 + n2;
}

let newNum = add2(12, 3);
console.log(newNum)