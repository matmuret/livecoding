{
    // let change = null, myString = '';
    let myString = ''; // empty String
    let change = null; // empty Number
    let allowedToDrive = false; // starting for a boolean
    // Read the program? 

    // IF IN QUESTIONS; ALWAYS CONSOLE LOG 
    // DEBUGGING = CHECKING = DO IT AS OFTEN AS YOU WANT
    // DRY PRINCIPLE = DONT REPEAT YOURSELF

    // CHange Variables "Scope"
    change = 42; // 42 SAVED 
    console.log(change); // check the current state 
    // reassign numbers
    change = 28; // 28 saved!!! 
    console.log(change);
    // add to the number
    change += 8; // 36 saved!!!
    console.log(change); // 36 
    // subtract (minus) to the number
    change -= 10; // 26 saved !!!
    console.log(change); // 26

    // Change String
    myString = 'Hello World'; // Hello World
    console.log(myString); 
    // reassignment of the string
    myString = 'Hello Martina';
    console.log(myString);
    // add to the String
    myString += ' How are you today'; // same as myString = myString + 'How are you today'
    console.log(myString); // ALSO CALLED STRING ACCUMULATION
    // String CON-CAT-ENATION
    // empty the string
    myString = '';
    console.log(myString);

    // Changing it depending on conditions
    // Conditional assignment with TERNARY OPERATOR
    // condition ? true : false;
    let age = 35;
    let cash = 10000;
    //let allowedToDrive = false; // boolean (standard for starters)

    age > 18 ? allowedToDrive = true : allowedToDrive = false;
    console.log(allowedToDrive);

    let allowedToDriveShorter = age > 18 ? true : false;
    console.log(allowedToDriveShorter);

    // (marriedStatus === true) // conditions comparison operators === !== >= <= > < 
}