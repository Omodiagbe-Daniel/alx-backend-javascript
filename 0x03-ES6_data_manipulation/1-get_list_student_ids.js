export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return ([]);
  }
  const newArray = arr.map((ele) => (`${ele.id}`));
  return (newArray);
}
