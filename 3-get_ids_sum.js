export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}

// Test the function
import getListStudents from "./0-get_list_students.js";
const students = getListStudents();
console.log(getStudentIdsSum(students));
