const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

function getNames(array) {
  const arrayOfNames = array.map((element) => {
    return element.name;
  });

  return arrayOfNames;
}

console.log(getNames(data));

function bornBefore1990(array) {
  const output = array.filter((element) => {
    if (parseInt(element.birthday.split("-")[2]) < 1990) {
      return true;
    }
  });

  return output;
}

const bornBeforeArray = bornBefore1990(data);
console.log("born before 1990", bornBeforeArray);

function getFoods(array) {
  const foodObject = {};

  array.forEach((element) => {
    element.favoriteFoods.meats.forEach((meat) => {
      if (foodObject[meat] === undefined) {
        foodObject[meat] = 1;
      } else {
        foodObject[meat]++;
      }
    });

    element.favoriteFoods.fish.forEach((fish) => {
      if (foodObject[fish] === undefined) {
        foodObject[fish] = 1;
      } else {
        foodObject[fish]++;
      }
    });
  });

  return foodObject;
}

const foodsObj = getFoods(data);
console.log(foodsObj);
