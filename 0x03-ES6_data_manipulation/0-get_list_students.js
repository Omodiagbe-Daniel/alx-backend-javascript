export default function getListStudents() {
  const obj = [];
  const obj1 = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
  const obj2 = { id: 2, firstName: 'James', location: 'Columbia' };
  const obj3 = { id: 5, firstName: 'Serena', location: 'San Francisco' };
  obj.push(obj1);
  obj.push(obj2);
  obj.push(obj3);
  return (obj);
}
