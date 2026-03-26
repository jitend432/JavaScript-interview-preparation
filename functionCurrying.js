/*
👉
“Currying is a technique in JavaScript where a function takes one argument at a time and returns another function until all arguments are received.”

👉 Short:
“One function → multiple functions (one argument each)”

===================================================================
*/

//❌ Normal function:
function add(a, b, c) {
    return a + b + c;
}

console.log(add(2, 3, 4)); // 9

//================================================================

// ✅ Curried version:
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(add(2)(3)(4)); // 9

//==================================================================

//🔥 Real-life Use Case
function multiply(a) {
    return function (b) {
        return a * b;
    };
}

const double = multiply(2);
console.log(double(5)); // 10
console.log(double(10)); // 20