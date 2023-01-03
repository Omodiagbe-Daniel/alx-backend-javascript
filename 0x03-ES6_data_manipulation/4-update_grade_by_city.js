export default function updateStudentGradeByCity(students, city, newGrades) {
  const degrade = { grade: 'N/A' };
  const result = students.filter((ele) => ele.location === city);
  const result2 = result.map(
    (ele) => ({
      id: ele.id,
      firstName: ele.firstName,
      location: ele.location,
      grade: (newGrades.filter((grad) => grad.studentId === ele.id)).map(
        (gra) => gra.grade,
      ).pop() || degrade.grade,
    }),
  );
  return (result2);
}
