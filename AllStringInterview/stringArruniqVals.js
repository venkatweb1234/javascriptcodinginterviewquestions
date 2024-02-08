const strArr = [
  "John",
  "David",
  "Alex",
  "Venkat",
  "John",
  "David",
  "Alex",
  "Venkat",
];

const uniqueVal = strArr.filter((value, index, array) => {
  return array.indexOf(value) === index;
});

console.log(uniqueVal);
