const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Rodrigo',
  age: 29,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

console.log(person.name);

person.hobbies.forEach((hobby) => {
  console.log(hobby.toUpperCase());
});
