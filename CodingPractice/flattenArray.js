function flattenArray(arr) {
  return arr.toString().split(',').map(Number);
}

// Example
console.log(flattenArray([1, [2, [3, 4], 5], 6]));

// --------------------------------------------------------

function flattenArray(arr) {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(flattenArray(curr));
    }
    return acc.concat(curr);
  }, []);
}

// Example
console.log(flattenArray([1, [2, [3, 4], 5], 6]));