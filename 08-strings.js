"use strict";

// what is a string? 
// a little repetition 
// its a text
// always with quotes "double quotes"
// 'single quotes'
// `back ticks` <== left to the backspace key

// how can be put special character? 
// ESCAPE characters 
// done with \ <=== backslash <=== right to the 0 key <=== ALT GR + backslash key 
let myString = "hello  ' world!";// turn around 
let myString2 = 'hello  " world!'; // if it possible 
let mySpecialString = "Hello \" world!"; // make it with quotemark in the middle;
console.log(mySpecialString);
let mySpecialSingle = 'Hello \' world!'; // make it with a single quote in the middle 
console.log(mySpecialSingle);
// How can we make two lines? 
let myHelloWorld = "hello \nworld"; // make a new line
console.log(myHelloWorld);
// table about special characters we can use 
// look it up online 
// https://www.freeformatter.com/javascript-escape.html
console.log('\\'); // <== produces a back slash
// console.log('Mc Donald's'); // SyntaxError: missing ) after argument list
console.log('Mc Donald\'s');
// maybe you need to inspect the string closer! search for starting point
console.log('Lorem ipsum dolor sit \'amet consectetur adipisicing elit. Ratione\" aliquid alias similique\' pariatur inventore aperiam quia laborum, animiß21983ß012?=)(?=)(?=)/!"=§)/!?)"(§) nesciunt ullam et placeat reprehenderit sint reiciendis incidunt iusto suscipit harum consectetur.');
// Syntax Debugging is important! Let Visual Studio Code and read the error ;) 
//console.log("hello world'); <== make sure to always use the same in the beginning and end
//console.log(`also not working'); // also produces an error 

console.log('hello' + ' ' + 'world'); // concatenation with empty space

// String interpolation 
// ONLY works with Backticks
console.log(`back ticks`);
let variable = 'interpolation'; // expression
console.log(`back ${variable} ticks`); // string 
let placeholder = 'hello';
let secondPlaceholder = 'world';
console.log(`${placeholder}      ${secondPlaceholder}    i need more s p a c e s`);
// recognizes spaces and that's why its a little bit handier for that purposes! 
// use expressions within strings 
//console.log(' ` " "  '`); // SyntaxError: Unexpected end of input
console.log(' ` " "  `');

// Make it a question? boolean name pattern == BEST PRACTICE 
let areYouMarried = false;
let isItACat = true;
let hasACar = false;

let helloWorld = 'hello world';
// Getting the length of a String
// String.prototype.length
console.log(helloWorld.length); // 11 
// How long are are you? 
console.log(helloWorld[0]); // first one 
console.log(helloWorld[10]); // last one if we know 
console.log(helloWorld[helloWorld.length - 1]);

let loremIpsum = 'Lorem ipsum dolor sit \'amet consectetur adipisicing elit. Ratione\" aliquid alias similique\' pariatur inventore aperiam ökaölskdöalskd quia laborum, animiß21983ß012?=)(?=)(?=)/!"=§)/!?)"(§) nesciunt ullam et placeat reprehenderit sint reiciendis incidunt iusto suscipit harum consectetur.';
console.log(loremIpsum[loremIpsum.length - 1]); // more flexible 
console.log(loremIpsum.length); // veryyyy long
