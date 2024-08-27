// SCOPES

// global scope
let a = 300;

//Local SCOPES: curly braces in function or any type of if/else conditions
{
}

if (true) {
  // block scope
  let a = 10;
  console.log("INNER : ", a); // O/P : 10
}
console.log("OUTER : ", a); // O/P : 300

// EXAMPLE 1 : SCOPE FOR FUNCTIONS

// parent functions can't access child's variable/data
function one() {
  const userName = "Seemant";
  // child function can access parent's variable/data
  function two() {
    const website = "www.seemant.com";
    console.log(userName);
    function three() {
      const subCategory = "Male";
    }
    three();
  }
  // console.log(subCategory); // error : undefined subCategory variable
  // console.log(website); // error : undefined website variable

  two();
}
one();

// EXAMPLE 2 : SCOPE FOR CONDITIONS

if (true) {
  const userAge = "20";
  if (userAge === "20") {
    const website = "Linkedin";
    console.log(userAge + " " + website);
  }
  // console.log(website); O/P : error
}
// console.log(userAge); O/P : error

// ++++++++++++++++ INTRESTING CONCEPT +++++++++++++++++++
// HOISTING

// 1. Normal function can be hoisted because its function decleration is stay on top of the file/stack that's why we can call/invoke function before decleration
console.log(addOne(5)); // it can be invoked without error
function addOne(num) {
  return num + 1;
}

// 2. function Expression/arrow fn can not be hoisted we can not call/invoke function before decleration
console.log(addTwo(5)); // it reflect error
const addTwo = function (num) {
  return num + 2;
};
