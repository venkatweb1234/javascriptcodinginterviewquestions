function areAnagrams(str1, str2) {
  // Remove whitespace and convert strings to lowercase
  const cleanStr1 = str1.replace(/\s/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, "").toLowerCase();

  // Check if the lengths of the cleaned strings are different
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Convert strings to arrays, sort them, and join back into strings
  const sortedStr1 = cleanStr1.split("").sort().join("");
  const sortedStr2 = cleanStr2.split("").sort().join("");

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage
const str1 = "listen";
const str2 = "silent";
console.log(areAnagrams(str1, str2)); // Output: true

const str3 = "hello";
const str4 = "world";
console.log(areAnagrams(str3, str4)); // Output: false
