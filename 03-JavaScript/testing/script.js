let max = 3;
let min = 1;

for (let i = 0; i < 20; i++) {
  console.log(Math.round(Math.random() * (max - min) + min));
}

