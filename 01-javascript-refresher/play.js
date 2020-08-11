// The basics of declaring variables
// var name = 'Tony Stark';
// var age = 35;
// var hasHobbies = true;

// Var is outdated way of declaring variables use let and const instead to make the declaration more clear and intentional
// As a rule of thumb: use let instead of var, and for the variables that dont change in value use const
const name = 'Tony Stark';
let age = 35;
const hasHobbies = true;
// console.log(name);

// function summerizeUser(name, age, userHobbies) {
//   return (
//       'Name is '+
//       name +
//       ', age is '+
//       age+
//       ' and the user has hobbies: '+
//       userHobbies
//   );
// }

// Arrow functions : Above function can be rewritten using arrow function this way:
const summerizeUser = (name, age, userHobbies) => {
  return (
    'Name is ' +
    name +
    ', age is ' +
    age +
    ' and the user has hobbies: ' +
    userHobbies
  );
};

// Short cut arrow function
// const add = (first, second)=> first + second;
// const addone = first => first + 1;
const addRandom = () => 2 + 1;

// console.log(add(1,2));
// console.log(addone(1));
console.log(addRandom());
console.log(summerizeUser(name, age, hasHobbies));

// Template literals
// Instead of using double or single quotation marks:
// 'A String'
// or
// "Another string"
// you can use backticks (`)
// `Another way of writing strings`
// Now why would we use that way of creating strings?
// With that syntax, you can dynamically add data into a string like this:
const nameAgain = 'yourself';
const ageAgain = 29;
console.log(`My name is ${nameAgain} and I am ${ageAgain} years old.`);
