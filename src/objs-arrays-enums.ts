// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Rodrigo',
//   age: 29,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: 'Rodrigo',
  age: 29,
  hobbies: ['Sports', 'Cooking'],
  role: Role.AUTHOR
};

console.log(person);

person.hobbies.forEach((hobby) => {
  console.log(hobby.toUpperCase());
});
