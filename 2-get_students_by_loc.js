export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}

// Test the function
import getListStudents from "./0-get_list_students.js";
const students = getListStudents();
console.log(getStudentsByLocation(students, "San Francisco"));
