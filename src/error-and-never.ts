let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'rodrigo';

if (typeof userInput === 'string') {
  userName = userInput;
  console.log(userName);
}

console.log(userInput);

function generateError(message: string, code: number) {
  throw new Error(`${message} with error code ${code}`);
}

generateError('An error occurred', 500);
