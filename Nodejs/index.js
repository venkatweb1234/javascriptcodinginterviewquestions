const add = () => console.log("bar");
const imm = () => console.log("Immediate");
const zoo = () => console.log("zoo");
const start = () => {
  console.log("start");
  setImmediate(imm);
  new Promise((resolve, reject) => {
    resolve("foo");
  }).then((resolve) => {
    console.log(resolve);
    process.nextTick(zoo);
  });
  process.nextTick(add);
};
start();
