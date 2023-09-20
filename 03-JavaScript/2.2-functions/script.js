function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
  return `You will be a ${jobTitle} in ${location}. You will be married to ${partnerName} and you'll have ${numberOfChildren} children together.`;
}

const fortune = tellFortune("teacher", "Los Angeles", "Rihanna", 20);
console.log(fortune);