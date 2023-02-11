// const names: Array<string> = [];
// names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('hello world');
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(' ');
// });

function merge<T extends Object, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Rodrigo' }, { age: 29 });

console.log(mergedObj.name);
