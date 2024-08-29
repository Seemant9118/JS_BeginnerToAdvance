// Immediately Invoked Function Expression (IIFE)
// WHY ? to prevent Global scope pollutions
// WHAT? those functions which are immediately invoked the functions

// SYNTAX
(() => {})();

// Use case : When i want to imeediate function call. Like DB CONNECTIONS etc.

// Example1 : named IIFE - those function which have name
(function dbConnection() {
  console.log("DB CONNECTED");
})();

// Example2 : Unnamed IIFE - those function which don't have name
((name) => {
  console.log(`DB CONNECTED:${name}`);
})('AWS-SERVER-30-collection');
