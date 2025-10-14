
const students = [
  { name: "Arun", marks: 85 },
  { name: "Varsha", marks: 72 },
  { name: "Rahul", marks: 91 },
  { name: "Priya", marks: 68 },
  { name: "Divya", marks: 95 }
];
function assignGrades(students) {
  return students.map(student => {
    let grade;
    if (student.marks >= 90) grade = "A+";
    else if (student.marks >= 80) grade = "A";
    else if (student.marks >= 70) grade = "B";
    else if (student.marks >= 60) grade = "C";
    else grade = "Fail";
    return {
      name: student.name,
      marks: student.marks,
      grade: grade
    };
  });
}
const gradedStudents = assignGrades(students);
console.log("Original Student Data:");
console.log(students);

console.log("\nStudents with Grades:");
console.log(gradedStudents);
