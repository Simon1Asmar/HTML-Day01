const populations = [3.7, 60.5, 103, 2.6]; //in millions
//                   Eritrea, South Africa, DRC, Botswana
console.log('populations', populations)

const percentages = populationPercentages(populations);
console.log('percentages', percentages)

function populationPercentages(populationsArray){
  const percentages = [];

  for (population in populationsArray){
    percentages.push(percentagesOfTheWorld1(populationsArray[population]));
  }

  return percentages;
}

//function from 3.3
function percentagesOfTheWorld1(population) {
  return (population / 7900) * 100;
}