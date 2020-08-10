// The obligatory hellow world print to console
// console.log("Hello from Node.js");

//A simple way to demo nodejs writing to file system
const fs  = require('fs');
fs.writeFileSync('hello.txt','Hello from Node.js');