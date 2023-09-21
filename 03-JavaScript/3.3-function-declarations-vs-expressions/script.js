function percentagesOfTheWorld1(population) {
  return (population / 7900) * 100;
}

const southAfricaPopulation = 60.5;
console.log("southAfricaPopulation", southAfricaPopulation);
const congoDRPopulation = 103;
console.log("congoDRPopulation", congoDRPopulation);
const eritreaPopulation = 3.7;
console.log("eritreaPopulation", eritreaPopulation);

const southAfricaPercentage = percentagesOfTheWorld1(southAfricaPopulation);
console.log("southAfricaPercentage", southAfricaPercentage);
const congoDRPercentage = percentagesOfTheWorld1(congoDRPopulation);
console.log("congoDRPercentage", congoDRPercentage);
const eritreaPercentage = percentagesOfTheWorld1(eritreaPopulation);
console.log("eritreaPercentage", eritreaPercentage);

const percentagesOfTheWorld2 = function (population) {
  return (population / 7900) * 100;
};

const southAfricaPercentage2 = percentagesOfTheWorld2(southAfricaPopulation);
console.log("southAfricaPercentage2", southAfricaPercentage2);
const congoDRPercentage2 = percentagesOfTheWorld2(congoDRPopulation);
console.log("congoDRPercentage2", congoDRPercentage2);
const eritreaPercentage2 = percentagesOfTheWorld2(eritreaPopulation);
console.log("eritreaPercentage2", eritreaPercentage2);