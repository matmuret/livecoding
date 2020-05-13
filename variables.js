// Statement = Instruction for the computer
// always finished with a semicolon

// Variables 
// CSS Variables 
// SASS VARIABLES 
// $color1: red;
// @import(filename);
// background-color: $color1;

// Variable = BOX which is empty in the beginning
// Boxes have Name = Name of Variable $color1
// needs to have a name to be used later! 

let firstName = 'John'; // camelCase always in place
let lastName = 'Smith'; // declaration with keyword "let" normally
// let variableName = value;

console.log(firstName);
console.log(lastName);
console.log(firstName + lastName);

// let firstName = 'Martina'; SyntaxError: Identifier 'firstName' has already been declared

var overwriteMe = 'John'; // Declaration 
console.log(overwriteMe);
var overwriteMe = 'Martina'; // yes, here we can overwrite, but its no good!! 
console.log(overwriteMe);

firstName = 'Martina';// overwrite = Change the content of the box! 
console.log(firstName); // good way to do it! 

// DECLARATION & ASSIGNMENT
var myVar; 
console.log(myVar); // undefined as long as there is no assignment.


let myVariable; // Declaration "let myVariable"
console.log(myVariable); // undefined === NOTHING in JavaScript 
myVariable = 'something'; // Assignment with equal; 
console.log(myVariable);
myVariable = 'to something new'; // Re-Assign later, also called Assignment; 
console.log(myVariable);

let camelcase = "camelcase"; // PLEASE DONT'S, ALWAYS STICK TO camelCase
console.log(camelcase);
// let 123 = 'will not work'; // SyntaxError: Unexpected number
// let %&&&/ = 'nope';
// let first Name = 'also not possible';

let camelCase = 'camelCase'; // very popular (my recommendation)
let snake_case = 'Snake_Case'; // also another possibilty (not so common)

let myString = 'string'; // Data Types STRING
let myNumber = 23;  // Data Types NUMBER
let myBoolean = true; // Data Types BOOLEAN
console.log(myString + myNumber); // string always wins 
console.log(myNumber + 1); // adds a number to a number 
console.log(myBoolean === true); // true, also a boolean

// let emptyBox = undefined;  equal to let emptyBox;
let emptyBox; // undefined automatically 
let myNewEmptyString = ''; // always produce a string, not so good 
let realEmptyNumber = null; // equivalent for intentionally empty variables
console.log(realEmptyNumber);
console.log(typeof(realEmptyNumber)); // typeof Object = Base of JavaScript  
console.log(typeof(String)); // functions = Base of JavaScript 

