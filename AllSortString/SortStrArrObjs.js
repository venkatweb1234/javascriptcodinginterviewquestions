const strArrObjects = [
  { name: "Venkat", age: 32, desc: "test" },
  { name: "Yellow", age: 35, desc: "test1" },
  { name: "David", age: 33, desc: "test2" },
  { name: "Alex", age: 34, desc: "test3" },
];

const SortArrObj = strArrObjects.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  // compare names
  if (nameA < nameB) {
    return -1; // if nameA should come before nameB, return -1
  }
  if (nameA > nameB) {
    return 1; // if nameA should come after nameB, return 1
  }
  return 0; // if names are equal, return 0
});
console.log(SortArrObj);
