const numVal = 89376123;
const changeNumbertoStr = numVal.toString();
const splitNumber = changeNumbertoStr.split(""); // ['8','9','3'...etc]
const sortFinalNum = splitNumber.sort();
console.log(Number(sortFinalNum.join("")));
