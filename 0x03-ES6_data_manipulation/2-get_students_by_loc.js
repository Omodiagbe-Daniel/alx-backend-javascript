export default function getStudentsByLocation(student = [], city) {
  const result = student.filter((ele) => ele.location === city);
  return (result);
}
