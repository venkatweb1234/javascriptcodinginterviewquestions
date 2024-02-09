let number = 8934589345;
let chnageNumberToString = number.toString();
let splitNum = chnageNumberToString.split("");
const uniqueVal = splitNum.filter((value, index, array) => {
  return array.indexOf(value) === index;
});

console.log(Number(uniqueVal.join("")));
