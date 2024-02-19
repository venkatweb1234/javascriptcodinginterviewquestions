const strVal = "Testting";
const LowerstrVal = strVal.toLowerCase();
const SplitStrVal = LowerstrVal.split("");
const uniqueVal = SplitStrVal.filter((value, index, array) => {
  return array.indexOf(value) !== index;
});

console.log(uniqueVal.join(""));
