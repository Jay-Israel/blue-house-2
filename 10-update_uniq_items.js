export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error("Cannot process");

  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
  return map;
}

// Test the function
import groceriesList from "./9-groceries_list.js";

const map = groceriesList();
console.log(map);

updateUniqueItems(map);
console.log(map);
