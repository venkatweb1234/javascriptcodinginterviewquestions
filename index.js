console.log(toTitleCase("testabc"));
function toTitleCase(str) {
  return str.replace(/\b\w/g, (l) => l.toUpperCase());
}
