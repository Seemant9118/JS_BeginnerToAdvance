// +++++++++++++++++++++SWITCH++++++++++++++++++++++++
// SYNTAX
// switch (key) {
//     case value:
//         break;

//     default:
//         break;
// }

const month = "march";

switch (month) {
  case "jan":
    console.log("January");
    break;
  case "feb":
    console.log("Febraury");
    break;
  case "march":
    console.log("March");
    break;
  case "april":
    console.log("April");
    break;
  default:
    console.log("Default : Rest remaining months");
    break;
}
