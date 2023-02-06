const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person2 = {
  name: 'Rodrigo',
  age: 29
};

const copiedPerson = { ...person2 };
console.log(copiedPerson);

const addMultiple = (...numbers: number[]) =>
  numbers.reduce((curResult, curValue) => curResult + curValue, 0);

const addedNumbers = addMultiple(5 + 7 + 2.5 + 11);

console.log(addedNumbers);

const [hobby1, hobby2] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { name: userName2, age: userAge } = person2;

console.log(person2, userName2, userAge);
