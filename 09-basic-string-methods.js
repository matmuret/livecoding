// what is a string? 
// combination of characters
// data type in javascript 
// primitive datatype 
// const immutable
// string, numbers, boolean
// (null), undefined
let myString = "hello world? "; // double quotes
let anotherString = `hello world`; // back tick
let singleString = 'hello world'; // single quotes
// all the same, just make sure to use the same in the beginning and in the end
let mcDonalds = "Mc Donald's";
let singleMcDonalds = 'Mc Donald\'s'; // escapes the character following afterwards
let donalds = 'Mc Donald\'\'s'; // escapes the character following afterwards
console.log(donalds);
// camelCase = names of vars should always start with a smallLetter 
// CON-CAT-ENATION = "hello" + "world" 
// LIKE INTERPOLATION ${variable} ${secondVar}
// also called TEMPLATE LITERALS 
let inter = "inter";
let polation = "polation";
let both = `${inter}${polation}`; // recognizes spaces

console.log(`${inter}       ${polation}
    write something
    second line`); // more practical in some cases 

console.log(inter + " " + polation); // concatenation

console.log(`    <h1>
        HELLO WELCOME MY WEBSITE
    </h1>`); // more practical in some cases 

    //       0123456789...
let title = "hello welcome to my website";
console.log(title.length); // length of the string
console.log(title[0]); // first char of the string
console.log(title[title.length - 1]); // last character of the string
// goal: make all big! 
// basic String method
// converting case with String.prototype.toUpperCase()
//console.log(title.toUpperCase());
title = title.toUpperCase(); // we need to save that 
console.log(title); // changed the var itself
title = title.toLowerCase();
console.log(title); 
// Goal: Hello 
title[0].toUpperCase(); // H
console.log(title[0].toUpperCase()); // H
// before we can finish this goal 
// we need to learn another method
// Extracting parts of a string
// String.prototype.substring()
console.log(title.substring(1));
title = title[0].toUpperCase() + title.substring(1);
console.log(title);
// Goal: Website 
console.log(title[20]); // 20 end is exclusive 
title = title.substring(0, 20) + title[20].toUpperCase() + title.substring(21);
console.log(title);
// Uppercase & Substring "martina" => "Martina" // Good format 
// substring(inclusive start, exclusive end)
// substring(inclusive start) => goes until the end
// substr() is something different!!!

let newExample = "Vadim Natia Daniel Edgar Marcell Voldemort";
// does this string hold the name "Lena"?
// String.prototype.includes()

