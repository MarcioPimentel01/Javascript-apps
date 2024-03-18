// TYPE CONVERSION = CHANGE THE DATATYPE OF A VALUE TO ANOTHER.
//                  (STRING, NUMBERS, BOOLEANS)

// let age = "how old are you";  //= window.prompt("how olde are you?");
// age = number(age) // a function that converts the variable 'age' into a number
// age+=1;
// console.log(age);

function stringType() {
    let a = "coconut";
    let b = "coconut";
    let c = "coconut";
    a = Number(a); // Convert 'a' to a number
    b = String(b); // Convert 'b' to a string (although it's already a string)
    c = Boolean(c); // Convert 'c' to a boolean
    console.log(a, typeof a);
    console.log(b, typeof b);
    console.log(c, typeof c);
}

function NumberType () {
    let a = "10";
    let b = "10";
    let c = "10";
    a = Number(a); // Convert 'a' to a number
    b = String(b); // Convert 'b' to a string (although it's already a string)
    c = Boolean(c); // Convert 'c' to a boolean
    console.log(a, typeof a);
    console.log(b, typeof b);
    console.log(c, typeof c);
}

function zeroType () {
    let a = "0";
    let b = "0";
    let c = "0";
    a = Number(a); // Convert 'a' to a number
    b = String(b); // Convert 'b' to a string (although it's already a string)
    c = Boolean(c); // Convert 'c' to a boolean
    console.log(a, typeof a);
    console.log(b, typeof b);
    console.log(c, typeof c);
}

function noValue () {
    let a = "";
    let b = "";
    let c = "";
    a = Number(a); // Convert 'a' to a number
    b = String(b); // Convert 'b' to a string (although it's already a string)
    c = Boolean(c); // Convert 'c' to a boolean
    console.log(a, typeof a);
    console.log(b, typeof b);
    console.log(c, typeof c);
}

function noAssignment () {
    let a;
    let b;
    let c;
    a = Number(a); // Convert 'a' to a number
    b = String(b); // Convert 'b' to a string (although it's undefined)
    c = Boolean(c); // Convert 'c' to a boolean (although it's undefined)
    console.log(a, typeof a);
    console.log(b, typeof b);
    console.log(c, typeof c);
}
