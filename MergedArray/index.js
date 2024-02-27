const MergedArray = (arr1, arr2) => {
  const MregedArr = [];
  const maxlaength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxlaength; i++) {
    if (i < arr1.length) MregedArr.push(arr1[i]);
    if (i < arr2.length) MregedArr.push(arr2[i]);
  }
  return MregedArr;
};

const arr1 = [2, 4, 19, 30, 40, 23];
const arr2 = [8, 9, 3, 1, 14, 24, 23, 0];
console.log(MergedArray(arr1, arr2));
