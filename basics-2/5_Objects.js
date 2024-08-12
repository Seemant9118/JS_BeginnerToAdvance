const course = {
  courseName: "JS Mastery",
  price: "1999",
  courseInstructor: "Seemant",
};
// Objects destructuring
const { courseInstructor: instructor } = course;

console.log(instructor);

const navbar = ({ company }) => {
  console.log(company);
};

let company = "Dell Inc.";
navbar(company);
