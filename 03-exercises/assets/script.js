// arithhmetic operators = operands (values, variables, tec.)
//                          operators (+ - * /)
//                          ex. 11 = x + 5

let students = 30;
// increase the number of students
students += 1;
console.log(students); // result is 31

// decrease the number of students by 1
students -= 1;
console.log(students); // result is 30 (because 1 was added prior this operation)

// multiply the number of students by 2
students *= 2;
console.log(students); // result is 60

// divide the number od students by 2
students /= 2;
console.log(students); // result is 15


// exponents are represented by '**'

students **= 2;
console.log(students); // result is 900

students = 30;

students **= 3;
console.log(students); // result is 27000 (because I set students as 30 again above)


// Modulus operator
// gives the remainder of any division.

students = 31;
students %= 2;
console.log(students);

//aperntly it is a good prectice that if you are using the modulus operator to create a new variable entirely.
// another goog use for modulos operator is to use to identify if a number is even or odd, that can help when using values as true and false (boolean)
let studentExtra = students %= 3;
console.log(studentExtra);

// incrementos opperetor.

students = 30;

students++; // only increase one 
console.log(students);

students--;
console.log(students);

    // operator precedence
    // 1. parenthesis ()
    // 2. exponents
    // 3. multiplication, division and modulo
    // 4. addition and subtraction

let resultOne = 1 + 2 * 3 + 4 **2;
console.log(resultOne); //result is 23

let resultTwo = 6 / 2 ** (2 + 5);
console.log (resultTwo);







