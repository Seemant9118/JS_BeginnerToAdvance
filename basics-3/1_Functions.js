// function decleration
function sayMyName() {
  console.log("Seemant");
}
sayMyName; // function reference
sayMyName(); // invoke function

// +++++++++++++++++++++EXAMPLES++++++++++++++++++++++++++

// Example1:  addition of two numbers
// parameters : function defination define variables
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
// arguements : function invocation pass variables
const result = addTwoNumbers(2, 5);
console.log("Result : ", result);


// Example2 : just print message which is passed as an args
function loginUserMessage(userName = "Sam") {
  if (!userName) {
    console.log("Please Enter a User Name");
    return;
  }
  return `${userName} just logged in`;
}
console.log(loginUserMessage("Seemant"));


// Example3 : using rest operator we can consider nth numbers
function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(2, 4, 6));


// Example4 : function with objects as parameters
const user = {
  userName: "Seemant",
  price: "299.00",
};
function handleObj(anyObject) {
  console.log(
    `Username is ${anyObject?.userName} and price is $${anyObject?.price}`
  );
}
handleObj(user);


// Example5 : function with arrays as parameter
const myNewArray = [200, 300, 500, 600];
function returnSecondValueFromAnyArray(getArray) {
  return `Second value of an array is ${getArray[1]}`;
}
console.log(returnSecondValueFromAnyArray(myNewArray));
