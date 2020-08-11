// The basics of declaring variables
var name = 'Tony Stark';
var age = 35;
var hasHobbies = true;
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