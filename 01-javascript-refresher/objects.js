// Objects in Js allow us to group data together
// objects can have anonymous functions inside them called as methods

const person = {
  name: 'Yourself',
  age: 35,
  greet() {
    console.log('Hi, I am ' + this.name);
  },
};

// console.log(person);
person.greet();

// Arrays and map method
const hobbies = ['sports', 'cooking'];
console.log(hobbies.map((hobby) => 'hobby: ' + hobby));
