function flattenArray(arr) {
  return arr.toString().split(',').map(Number);
}

// Example
console.log(flattenArray([1, [2, [3, 4], 5], 6]));