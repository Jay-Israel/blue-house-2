export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find(
        (grade) => grade.studentId === student.id
      );
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : "N/A",
      };
    });
}

// Test the function
import getListStudents from "./0-get_list_students.js";
console.log(
  updateStudentGradeByCity(getListStudents(), "San Francisco", [
    { studentId: 5, grade: 97 },
    { studentId: 1, grade: 86 },
  ])
);

console.log(
  updateStudentGradeByCity(getListStudents(), "San Francisco", [
    { studentId: 5, grade: 97 },
  ])
);
