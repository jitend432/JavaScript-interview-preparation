function greet(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] + arr[i] === target) {
      return [arr[0], arr[i]];
    }
  }
}

let result = greet([1,2,3,4,5,6,7,8,9], 6);
console.log(result);