function countUniqueSubstrings(inputString) {
  const words = inputString.split(" ");
  const uniqueWords = new Set();
  let count = 0;

  for (let word of words) {
    if (!uniqueWords.has(word)) {
      uniqueWords.add(word);
    } else {
      count++;
      uniqueWords.clear();
      uniqueWords.add(word);
    }
  }

  // Add 1 for the last substring
  if (uniqueWords.size > 0) {
    count++;
  }

  return count;
}

// Test the function
const inputString = "apple orange apple apple";
console.log(countUniqueSubstrings(inputString)); // Output: 3
