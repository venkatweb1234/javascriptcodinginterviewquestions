const numArr = [200, 8, 9, 4, 201, 8, 9, 4];

const uniqueVal = numArr.filter((value, index, array) => {
  return array.indexOf(value) === index;
});

console.log(uniqueVal);
