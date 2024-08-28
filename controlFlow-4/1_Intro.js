// CONTROL FLOW

// CONDITION OPERTORS : "< , > , <= , >= , ==, ===, !=, !==, ||, &&"

// IF / ELSE STATEMENT
// const temprature = 46;
// if (temprature < 50) {
//     console.log("less than 50");
// } else {
//     console.log("temprature is greater than 50");
// }

// const score = 200;
// let power = "";
// if (score > 100) {
//   power = "fly";
//     console.log(`User power : ${power}`);
// } else {
//   power = "NA";
//     console.log(`User power : ${power}`);
// }

// IF / ELSEIF / ELSE STATEMENT
// const balance = 200.0;
// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else {
//   console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("User Logged In");
}
if (userLoggedIn && debitCard) {
  console.log("Allow for shopping");
}
