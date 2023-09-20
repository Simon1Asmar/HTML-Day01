function countryInfo(country, population, capitalCity){
  const output = `${country} has ${population} people, and its capital city is ${capitalCity}`;
  return output;
}

const country1 = countryInfo("Nigeria", "200 million", "Lagos");
const country2 = countryInfo("South Afrcia", "60 million", "Cape Town");
const country3 = countryInfo("Eritrea", "3.7 million", "Asmara");

console.log(country1);
console.log(country2);
console.log(country3);
