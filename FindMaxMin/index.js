function findMaxMin(numberArr) {
  if (numberArr.length === 0) {
    return "Array is empty";
  }
  //   let max = numberArr[0];
  //   let min = numberArr[0];
  //   for (let i = 1; i < numberArr.length; i++) {
  //     if (numberArr[i] > max) {
  //       max = numberArr[i];
  //     }
  //     if (numberArr[i] < min) {
  //       min = numberArr[i];
  //     }
  //   }
  let max = Math.max(...numberArr);
  let min = Math.min(...numberArr);
  return { max: max, min: min };
}
let numberArr = [3, 7, 200, 8, 5, 1];
const result = findMaxMin(numberArr);
console.log("Maximum number:", result.max);
console.log("Minimum number:", result.min);
