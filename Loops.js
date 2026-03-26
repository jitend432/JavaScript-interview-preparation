// =======================
// 1. for loop
console.log("1. For Loop:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("\n2. While Loop:");
// =======================
// 2. while loop
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

console.log("\n3. Do…While Loop:");
// =======================
// 3. do…while loop
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

console.log("\n4. For…In Loop (Object):");
// =======================
// 4. for…in loop with object
const obj = {a: 10, b: 20, c: 30};
for (let key in obj) {
    console.log(key, obj[key]);
}

console.log("\n4b. For…In Loop (Array):");
// for…in with array
const arr = [100, 200, 300];
for (let index in arr) {
    console.log(index, arr[index]);
}

console.log("\n5. For…Of Loop (Array):");
// =======================
// 5. for…of loop with array
for (let value of arr) {
    console.log(value);
}

console.log("\n5b. For…Of Loop (String):");
// for…of with string
const str = "Hello";
for (let char of str) {
    console.log(char);
}