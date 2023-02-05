const person = {
  name: 'Rodrigo',
  age: 29,
  hobbies: ['Sports', 'Cooking']
};

console.log(person.name);

person.hobbies.forEach((hobby) => {
  console.log(hobby.toUpperCase());
});
