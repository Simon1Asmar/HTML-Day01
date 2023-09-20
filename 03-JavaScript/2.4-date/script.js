function getCurrentDate(){
  const arrayOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const arrayOfDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "September"];

  const date = new Date();

  return `Today is ${arrayOfDays[date.getDay()]} the ${date.getDate()} of ${arrayOfMonths[date.getMonth()]} ${date.getFullYear()}`;
}

console.log(getCurrentDate());