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

//---------------------------------------------------------
// Iterative Approach

function flattenArray(arr) {
  let stack = [...arr];
  let result = [];

  while (stack.length) {
    let item = stack.pop();

    if (Array.isArray(item)) {
      stack.push(...item);
    } else {
      result.push(item);
    }
  }

  return result.reverse();
}

// Example
console.log(flattenArray([1, [2, [3, 4], 5], 6]));
