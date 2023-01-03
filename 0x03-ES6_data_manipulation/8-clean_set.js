export default function cleanSet(set, startString) {
  const str = [];
  if (startString === '' || !startString) {
    return ('\n');
  }
  for (const item of set) {
    if (item.includes(startString)) {
      const newStr = item.replace(startString, '');
      str.push(newStr);
    }
  }
  return str.join('-');
}
