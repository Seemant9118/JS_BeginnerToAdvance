// +++++++++++++++JS EXECUTION CONTEXT+++++++++++++++++++

// HOW ?
// 1.JS creates Global excution context
// 2.Next it creates memory phase
// 3.Memory phase - In this phase,the variables are set to undefined until the execution phase(next phase) and the functions are set to their definitions.
// 4.Next it creates the execution phase
// 5.Execution phase - In this phase,the variables are initialsed to given values and when the functions are called,it creates a memory phase and execution phase for the function just like the main one.
// 6. if more function/methods availabe cycle goes on

// LIVE DEMO : Understand call stack with the help of live demo :
// browser > inspect > Sources
// 1.then create a snippet by clicking on the arrow(>>) next to workspace
// 2.then write down some functions in the created snippet ,do save them by ctrl+S
// 3.Create breakpoints and run the code and keep eye on call stack to visualize how it works.

// Examples of js code to check in your browser

// Example 1 
let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

// EXAMPLE 2
function one() {
  console.log("one");
  two();
}

function two() {
  console.log("two");
  three();
}

function three() {
  console.log("three");
}

one();
two();
three();
