console.log("Grouping in Array");

const array = [
  { food: "🍆", type: "Vegetable", count: 1 },
  { food: "🍍", type: "Fruits", count: 1 },
  { food: "🍎", type: "Vegetable", count: 3 },
  { food: "🌰", type: "Non-Vegs", count: 5 },
  { food: "🧆", type: "Non-Vegs", count: 4 },
  { food: "🥦", type: "Vegetable", count: 1 },
  { food: "🍳", type: "Non-Vegs", count: 3 },
  { food: "🥭", type: "Fruits", count: 4 },
  { food: "🍉", type: "Fruits", count: 1 },
];

const grouped = array.group(array, "type");
console.log(grouped);

const groupByCount = array.group((item) => {
  return item.count > 1 ? "On-Track" : "Need-Improvement";
});
console.log(groupByCount);

const grouped1 = array.groupToMap(array, "type"); // Will return JavascriptArray
console.log(grouped1);
