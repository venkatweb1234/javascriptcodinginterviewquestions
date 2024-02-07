function isPalindrome(Originalstr) {
  Originalstr = Originalstr.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log("Revrse Val: ", Originalstr.split("").reverse().join(""));
  return Originalstr === Originalstr.split("").reverse().join("");
}
console.log(isPalindrome("Racecar")); // true;
console.log(isPalindrome("hello")); // false
