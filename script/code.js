// 1variable
// a container which holds the value while the Java program is executed

// 2 value 
// to assign default values to variables and method arguments

//3 data type
// a set of values and a set of operations defined on those values

// 4 initialization
// Initializing a variable means specifying an initial value to assign to it

// diff between let var and const
// let 
// let does not allow to redeclare variables.

// var 
// var is function scoped.
// var allows to redeclare variables.

// const 
// If you never want a variable to change 

// variable scope
// the scope of a variable is the block of code in the entire program where the variable is declared, used, and can be modified.

// When can you decide when to use a for or while, forEach and do while loop?

//7 when to use a for or while, forEach and do while loop
// A for Loop is used to repeat a specific block of code a number of times that is known.
// A while Loop is used to repeat a specific block of code an unknown number of times until the conditions are met.
// A foreach loop is used when you need to operate on each item individually in an array.
// A do while loop is used in all scenarios where the loop body needs to be executed at least once.


// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

// varible scope 
// refers to the current context of code, which determines the accessibility of variables to JavaScript.



// let fullname = 'Alonso-Cupido'
// console.log(fullname);


// Question;2
// let me = {
//     firstName: "Alonso",
//     lastName: "Cupido",
//     age: 19,
//     subjects: ["english" , "math" , "Consumers" ,"business studies" , "Life science"],
//     address: {
//         streetName :"Cycad",
//         streetNumber: 15,
//         suburb: "Mitchells plain",
//         city: "Cape Town",
//         countryName: "South Africa"
//     }
// }
// console.log(me);


// Question3
function calculate() {
    let number1 = parseInt(document.getElementById("numb1").value);
    let number2 = parseInt(document.getElementById("numb2").value);
    let operator = document.getElementById("operator").value;

    let result;

    switch (operator) {
        case "+":
             result =number1 +number2
             break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
        default:
            result = "error"          
    }
    document.getElementById("answer").textContent= "result: "+ result;
}

  
 