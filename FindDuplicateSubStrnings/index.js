function countDuplicateSubstrings(inputString) {
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
  if (uniqueWords.size > 0) {
    count++;
  }
  return count;
}

const inputString = "apple orange apple apple";
console.log(countDuplicateSubstrings(inputString)); // o/p: 3
