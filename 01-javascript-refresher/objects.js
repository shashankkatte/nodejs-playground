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

// the  operator ( 3 dots) ... is used to strip values from an array or object and copy the contents to another - spread
const copiedArray = [...hobbies];
console.log(copiedArray);

const copiedPerson = { ...person };
console.log(copiedPerson);

// the same ... operator becomes a rest operator when used the context of functions taking multiple arguments
const toArray = (...args) => {
  return args;
};
console.log(toArray(1,2,3,4));

//  Destructuring is a neat functionality in javascript that aloows us to strip only the data needed for our code snippet
// object destructuring
const {name, age} = person;
console.log(name, age);

//array destructuring
const [first, second] = hobbies;
console.log(first,second);
