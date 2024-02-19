let arrayObj = [
  { id: 1, age: 20 },
  { id: 2, age: 10 },
  { id: 3, age: 40 },
  { id: 4, age: 30 },
];

arrayObj.sort((a, b) => b.age - a.age);
console.log(arrayObj);
