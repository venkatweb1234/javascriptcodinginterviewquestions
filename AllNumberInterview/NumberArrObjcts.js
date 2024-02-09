const arrayOfObjects = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 32 },
  { id: 3, name: "Doe", age: 34 },
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 32 },
  { id: 3, name: "Doe", age: 34 },
];

const findUniquArrObjs = arrayOfObjects.filter((value, index, array) => {
  return array.findIndex((val) => val.age === value.age) === index;
});

console.log(findUniquArrObjs);
