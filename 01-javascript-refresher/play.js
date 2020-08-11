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

function summerizeUser(name, age, userHobbies) {
  return (
      'Name is '+
      name +
      ', age is '+
      age+
      ' and the user has hobbies: '+
      userHobbies
  );
}

console.log(summerizeUser(name,age,hasHobbies));