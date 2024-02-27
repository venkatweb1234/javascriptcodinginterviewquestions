//Filter even and odd numbers in Javascript
function findEvenOddNum(numbers) {
  let oddNumbers = [];
  let evenNumbers = [];
  numbers.forEach((num) => {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    } else {
      oddNumbers.push(num);
    }
  });
  return [evenNumbers, oddNumbers];
}
const numbers = [2, 3, 4, 8, 10, 12, 13, 17, 1, 5, 7, 6];
const [evenNumbers, oddNumbers] = findEvenOddNum(numbers);
console.log("Even numbers:", evenNumbers); // Output: Even numbers: [2, 4, 8, 10, 12, 6]
console.log("Odd numbers:", oddNumbers); // Output: Odd numbers: [3, 13, 17, 1, 5, 7]
