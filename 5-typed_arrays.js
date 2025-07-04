export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw new Error("Position outside range");

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);
  return view;
}

// Test the function
console.log(createInt8TypedArray(10, 2, 89));
