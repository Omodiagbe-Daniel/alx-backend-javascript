export default function getStudentIdsSum(students) {
  const result = students.reduce((sum, val) => sum + val.id, 0);
  return (result);
}
