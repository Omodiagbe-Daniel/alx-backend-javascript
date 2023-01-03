export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  if (position >= length) {
    throw new Error('Position outside range');
  } else {
    view[position] = value;
  }
  const dataview = new DataView(buffer, 0, length);
  return (dataview);
}
