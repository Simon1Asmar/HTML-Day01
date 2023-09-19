const myCountry = {
  country: "Botswana",
  capital: "Gaborone",
  language: "English",
  population: "2.6 million",
  neighbors: ["Namibia", "South Africa", "Zimbabwe"],
  describe() {
    console.log(
      `${this.country} has ${this.population}, thier mother tongue is ${this.language}, they have ${this.neighbors.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland(){
    let isIsland = this.neighbors.length > 0 ? false : true;
    console.log(isIsland);
  }
};

myCountry.describe();
myCountry.checkIsland();