let friends = [
  {
    name: "Anna",
    books: ["Bible", "Broken Glass"],
    age: 98,
  },
  {
    name: "Venkat",
    books: ["The Girl With the Dragon Tattoo", "Harry Potter"],
    age: 28,
  },
  {
    name: "Bob",
    books: ["A little life", "Bob Dylan"],
    age: 48,
  },
  {
    name: "Raj",
    books: ["The Tipping Point", "Darkmans"],
    age: 18,
  },
];

let results = friends.reduce((pre, curr) => {
  return [...pre, ...curr.books];
}, []);

console.log(results);
