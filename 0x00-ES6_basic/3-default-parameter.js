export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  const result1 = expansion1989 === undefined ? 89 : expansion1989;
  const result2 = expansion2019 === undefined ? 19 : expansion2019;

  return initialNumber + result1 + result2;
}
