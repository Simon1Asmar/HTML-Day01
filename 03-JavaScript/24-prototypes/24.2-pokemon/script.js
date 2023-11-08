// Given Function
function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

// Create 3 instances of Pokemon
const pokemon1 = new Pokemon("Pikachu", "Electric", ["Static", "Lightning Rod"]);
const pokemon2 = new Pokemon("Charizard", "Fire", ["Blaze", "Solar Power"]);
const pokemon3 = new Pokemon("Psyduck", "Water", ["Damp", "Cloud Nine", "Swift Swim"]);

// Using prototype properties, I added a method called callPokemon that calls a Pokemon
Pokemon.prototype.callPokemon = function(){
  console.log(`I choose you, ${this.name}`);
}

// Using prototype properties, I added a method called attack, that takes an attackNumber and prints pokemon name and attack name
Pokemon.prototype.attack = function(attackNumber){
  console.log(`${this.name} used ${this.attackList[attackNumber]}`);
}

// Calling each Pokemon with the 2 methods I created
pokemon1.callPokemon();
pokemon1.attack(1);
pokemon2.callPokemon();
pokemon2.attack(0);
pokemon3.callPokemon();
pokemon3.attack(2);