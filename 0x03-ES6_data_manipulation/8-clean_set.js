export default function cleanSet(set, startString) {
  const str = [];
  if (startString === '' || !startString || !set) {
    return ('');
  }
  for (const item of set) {
    if (item.startsWith(startString)) {
      const newStr = item.replace(startString, '');
      str.push(newStr);
    }
  }
  return str.join('-');
}
