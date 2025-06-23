export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const count = weakMap.get(endpoint) + 1;
    if (count >= 5) throw new Error("Endpoint load is high");
    weakMap.set(endpoint, count);
  }
}

// Test the function
const endpoint = { protocol: "http", name: "getUsers" };
weakMap.get(endpoint);

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
// This should throw an error
queryAPI(endpoint);
