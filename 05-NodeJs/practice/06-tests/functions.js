function double(num) {
  if(typeof num === "string"){
    num = parseFloat(num);
  } else if(typeof num !== "number"){
    throw new Error("not a number")
  }
  return num * 2;
}

export {double};