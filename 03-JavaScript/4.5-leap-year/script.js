function checkIfLeapYear(year){
  let isLeapYear = false;
  if(year%4===0){
    if(year%100 === 0 && year%400 != 0){
      isLeapYear = false;
    } else {
      isLeapYear = true;
    }
  } else {
    isLeapYear = false;
  }

  if(isLeapYear){
    console.log("It is indeed a leap year");
  } else {
    console.log("This is not a leap year");
  }
}

checkIfLeapYear(2012);
checkIfLeapYear(2100);
checkIfLeapYear(2400);