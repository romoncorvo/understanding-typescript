const names: Array<string> = [];
names[0].split(' ');

const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve('hello world');
  }, 2000);
});

promise.then((data) => {
  data.split(' ');
});
