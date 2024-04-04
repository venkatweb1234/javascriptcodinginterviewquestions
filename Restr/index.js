const numberFirstAlphabetsSecond = (arr) => {
  let numbers = [];
  let alphabets = [];
  let finalArr = [];
  numbers = arr.filter((val) => typeof val === "number"); // O(n) time complexity
  alphabets = arr.filter((val) => typeof val === "string"); // O(n) time complexity
  numbers.sort(); // O(n log n) time complexity
  alphabets.sort(); // O(n log n) time complexity
  finalArr = [...numbers, ...alphabets]; // O(n+m) time complexity
  return finalArr;
};

let arr = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1];
console.log(numberFirstAlphabetsSecond(arr));

// Time compl (O(n), O(n log n), O(n + m))
// Space Compl (O(n))
