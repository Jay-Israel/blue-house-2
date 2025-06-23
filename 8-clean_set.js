export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== "string") return "";

  const filtered = [...set]
    .filter((item) => item && item.startsWith(startString))
    .map((item) => item.slice(startString.length));

  return filtered.join("-");
}

// Test the function
console.log(
  cleanSet(new Set(["bonjovi", "bonaparte", "bonappetit", "banana"]), "bon")
);
console.log(
  cleanSet(new Set(["bonjovi", "bonaparte", "bonappetit", "banana"]), "")
);
