// first I did "npm install request"

const request = require("request");

const url = "https://api.chucknorris.io/jokes/random";

request(url, (error, response, data)=>{
  if(!error && response.statusCode === 200){
    const filteredData = JSON.parse(data).value;
    console.log('filteredData', filteredData)
    // console.log('data', data)
    // console.log('filteredData:', filteredData)
    // console.log('value:', data.value)
  } else {
    console.error(`Error: ${error}`)
  }
});