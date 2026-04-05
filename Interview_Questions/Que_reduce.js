/*
acc (accumulator) = result jo hum bana rahe hain
curr (current) = current element (array ka ek-ek object)

*/


function groupBy(arr, key) {
  return arr.reduce((acc, curr) => {
    const groupKey = curr[key];

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }

    acc[groupKey].push(curr);

    return acc;
  }, {});
}

const users = [
  { name: "A", age: 20 },
  { name: "B", age: 25 },
  { name: "C", age: 20 }
];

const result = groupBy(users, "age");
console.log(result);