export default function updateUniqueItems(map1) {
  if (!(map1 instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, val] of map1) {
    if (val === 1) {
      map1.set(key, 100);
    }
  }
  return (map1);
}
