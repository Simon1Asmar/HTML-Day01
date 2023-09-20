const arrayOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const arrayOfDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "September"];

const date = new Date();

console.log(`Today is ${arrayOfMonths[date.getMonth()]} the ${date.getDate()} of ${arrayOfMonths[date.getMonth()]} ${date.getFullYear()}`);