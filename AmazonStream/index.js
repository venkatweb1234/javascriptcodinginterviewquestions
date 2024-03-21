function replaceInStream(inputStream, lookFor, replaceWith) {
  const outputArray = [];
  const lookForLength = lookFor.length;
  const buffer = [];
  while (inputStream.length > 0) {
    const char = inputStream.shift();
    buffer.push(char);
    if (
      buffer.length >= lookForLength &&
      buffer.slice(-lookForLength).join("") === lookFor
    ) {
      buffer.splice(-lookForLength);
      for (const char of buffer) {
        outputArray.push(char);
      }
      for (const replaceChar of replaceWith) {
        outputArray.push(replaceChar);
      }

      buffer.length = 0;
    } else if (buffer.length > lookForLength) {
      outputArray.push(buffer.shift());
    }
  }
  for (const char of buffer) {
    outputArray.push(char);
  }
  return outputArray;
}

const inputStream = ["1", "f", "o", "o", "2"];
const lookFor = "foo";
const replaceWith = "bar";
const outStream = replaceInStream(inputStream, lookFor, replaceWith);
console.log("Result:", outStream.join("")); // o/p: 1bar2 or "1", "b", "a", "r", "2"
