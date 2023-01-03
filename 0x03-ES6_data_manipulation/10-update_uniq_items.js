export default function updateUniqueItems(map1) {
  for (const [key, val] of map1) {
    if (val === 1) {
      map1.set(key, 100);
    }
  }
  return (map1);
}
