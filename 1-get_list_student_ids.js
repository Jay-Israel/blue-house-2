export default function getListStudentIds(students) {
  if (!Array.isArray(students)) return [];
  return students.map((student) => student.id);
}

// Test the function
import getListStudents from "./0-get_list_students.js";
console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));
