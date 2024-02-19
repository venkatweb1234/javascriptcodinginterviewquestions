const SortStr = "Testing";
const lowSortstr = SortStr.toLowerCase();
const SplitStr = lowSortstr.split("");
const SortVal = SplitStr.sort();
console.log(SortVal.join(""));
