const initialObject = {
  name: "the 48 Laws of Power",
  author: "Robert Greene"
}

console.log(initialObject);
console.log(swapObjPropsAndValues(initialObject));


function swapObjPropsAndValues(obj){

  const swapped = Object.entries(obj).map(
    ([key, value]) => [value, key]
  )

  const swappedObj = Object.fromEntries(swapped)
  
  return swappedObj;
}
