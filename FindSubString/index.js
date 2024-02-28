const FindLengthOfSub = (str) => {
  let currentString = [];
  let finalLength = 0;
  for (let i = 0; i < str.length; i++) {
    const currentCharterIndex = currentString.indexOf(str[i]);
    if (currentCharterIndex !== -1) {
      currentString.splice(0, currentCharterIndex + 1);
    }
    currentString.push(str[i]);
    finalLength = Math.max(finalLength, currentString.length);
  }
  return finalLength;
};
const str = "abbbcabcdefef";
console.log(FindLengthOfSub(str));
