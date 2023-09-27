const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

//Returns the price of the candy with the given id
function getCandy(candyStore, id) {
  const candy = candyStore.candies.find((c) => {
    if (c.id === id) {
      return true;
    }
  });

  return candy.price;
}

// getCandy(candyStore, "5hd7y");
console.log('getCandy(candyStore, "5hd7y");', getCandy(candyStore, "5hd7y"));

//Adds new a candy object with amount = 1 to the candystore candies array
function addCandy(candyStore, id, name, price) {
  candyStore.candies.push({
    name: name,
    id: id,
    price: price,
    amount: 1,
  });
}

addCandy(candyStore, "12312", "testItem", 60);
console.log("Added new Candy", candyStore);

function buy(candyStore, id){
  const candyToBuy = candyStore.candies.find(candy => {
    if(candy.id == id){
      return true;
    }
  });
  
  if(candyToBuy){

    if(candyToBuy.amount === 0){
      console.log("CANNOT BUY: Item out of stock.");
    } else {
      candyToBuy.amount--;
      candyStore.cashRegister += candyToBuy.price;
      console.log(`${candyToBuy.name} has been sold for $${candyToBuy.price}. Cash register currently holds $${candyStore.cashRegister}`);
    }

  } else {
    console.log("Candy with given ID does not exist.")
  }
}


buy(candyStore, "123123");
buy(candyStore, "12312");
buy(candyStore, "12312");
console.log(candyStore);