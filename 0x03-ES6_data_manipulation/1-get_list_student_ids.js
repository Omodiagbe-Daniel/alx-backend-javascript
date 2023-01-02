export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return ([]);
  }
  const newArray = arr.map((ele) => (`${ele.id}`));
  const arr1 = [];
  for (let i = 0; i < newArray.length; i += 1) {
    arr1.push(parseInt((newArray[i]), 10));
  }
  return (arr1);
}
