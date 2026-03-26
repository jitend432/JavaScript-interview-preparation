/*

A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers 
that do not natively support it.

🔹 Array.prototype.myMap ka matlab kya hai?

Iska matlab hai:

👉 Hum Array ke original prototype me ek naya method add kar rahe hain

🔹 Break karte hain:

1. Array
Ye JavaScript ka built-in constructor hai (array banane ke liye)
let arr = [1, 2, 3];
👉  "In JavaScript, an array is a built-in object that stores multiple values in an ordered manner,
      where each element can be accessed using its index."

2. prototype
👉 Har JavaScript object ka ek hidden property hota hai prototype
👉 Isme wo methods hote hain jo us type ke sab objects use karte hain
👉 "JavaScript follows prototype-based inheritance, where every object has a prototype. 
     The prototype is an object that allows sharing properties and methods across all instances."

Array.prototype.map
Array.prototype.filter
Array.prototype.push

3. myMap
👉 Ye hum khud bana rahe hain (custom function)
👉"When we add a custom function to Array.prototype, we are essentially extending the functionality of all array instances. 
    This means every array in JavaScript can access that function just like built-in methods such as map or filter."

🔹 Full line ka matlab:
Array.prototype.myMap = function() { }

👉 Matlab:
➡️ "Har array ke liye ek naya method myMap bana do"

*/

Array.prototype.myMap = function(callback) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};
let arr = [1, 2, 3];
let newArr = arr.myMap((num) => num * 2);
console.log(newArr); // [2, 4, 6]

//=================================================================================================//

Array.prototype.myMap = function(cb) {
    let result = [];
    for(let i=0; i<this.length; i++) {
        result.push(cb(this[i]));
    }
    return result;
}
const arrr = [1,5,8,7,6];
console.log(arrr.myMap(x=>x*2))