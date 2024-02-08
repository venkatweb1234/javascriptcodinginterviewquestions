const strArrayObjects = [
  { name: "John", age: 30, desc: "desc" },
  { name: "David", age: 31, desc: "desc1" },
  { name: "Alex", age: 32, desc: "desc2" },
  { name: "John", age: 30, desc: "desc" },
  { name: "David", age: 31, desc: "desc1" },
  { name: "Alex", age: 32, desc: "desc2" },
];

const uniquearraObjs = strArrayObjects.filter((value, index, array) => {
  return array.findIndex((val) => val.desc === value.desc) === index;
});

console.log(uniquearraObjs);
