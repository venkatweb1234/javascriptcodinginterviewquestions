function getMinimumFruits(fruits) {
  const fruitCount = new Map();
  for (const fruit of fruits) {
    fruitCount.set(fruit, (fruitCount.get(fruit) || 0) + 1);
  }
  let minCount = Number.MAX_SAFE_INTEGER;
  for (const count of fruitCount.values()) {
    minCount = Math.min(minCount, count);
  }
  return minCount % 2 === 0 ? minCount : 0;
}

const fruits = [1, 2, 5, 6];
console.log(getMinimumFruits(fruits)); //O/p: 0
