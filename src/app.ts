let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'rodrigo';

if (typeof userInput === 'string') {
  userName = userInput;
  console.log(userName);
}

console.log(userInput);
