// const nums = [43, 12, 55, 2]

// // const doubled = nums.map(n => {
// //   return n*2;
// // });
// // console.log(doubled);

// const sum = nums.reduce((acc, num) => {
//   return acc + num;
// })

// console.log(sum);

// nums.sort((el1, el2) => {
//   return el2 - el1;
// })

// console.log(nums);





// function vowelCount(str){
//   const counterObj = {};

//   str.toLowerCase();
//   str = str.split("");

//   str.forEach(char => {
//     if(char === "a" || char === "e" || char === "u" || char === "i" || char === "o"){

//       if(counterObj[char]===undefined){
//         counterObj[char] = 1;
//       } else {
//         counterObj[char]++;
//       }
      
//     }
//   });

//   console.log(counterObj)


// }
// //A,E,O,U,I
// const string = "hello my name is Adele i'm 10 years old iu love singing"
// vowelCount(string)

// const pattern = new RegExp(/[a-zA-Z]/)


const paragraph = document.querySelector("p");
let fontSize = parseInt(window.getComputedStyle(paragraph).fontSize);
console.log(fontSize);

fontSize = 90

paragraph.style.fontSize = `${fontSize}px`
