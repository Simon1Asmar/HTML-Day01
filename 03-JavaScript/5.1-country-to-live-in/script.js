let language = prompt("Enter Language").trim().toLowerCase();
let isIsland = prompt("island? (true or false)") === "true" ? true : false;
let population = parseInt(prompt("number"));
let country = prompt("Enter country name");

country = country.charAt(0).toUpperCase() + country.substring(1, country.length);


sarahLanguage = "english";
sarahIsIsland = false;
sarahMaxPopulation = 50000000;

if(!isIsland && language === sarahLanguage && population<=sarahMaxPopulation){
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}
