const { useState } = require("react");

var x = 100;
var y = '100';

console.log(x !==y) //check type and value (true)
console.log(x==y)   //check only value (true)
console.log(x===y) //check type and value (false)

var a = 20;  // Reassigned possible
var a = 30; // Redeclare possible // function scope

let b = 10; // Reassigned possible
  let g = 5;     // Redeclare Not possible // block scope

 const f = 11; //Reassigned not possible
 const s = 45; // Reiniatilise not possibe // block scope

// Callback------------>
 console.log("Start and wait for five minute")
 setTimeout(() => {
  console.log("Jitendra")
 },5000);
 console.log("Khatam karo yar")

 //callback  -------------> function passed as an argument to another function
 function greet(callback) {
  setInterval(()=> {
    callback("Good Morning")
  },5000);
 }
 greet((message)=> {
  console.log(message)
 });

 //callback
 function delivery (callback) {
  console.log("pizza order Placed")
  setTimeout(() => {
    callback("Pizza Delivered");
  },2000)
 }
 delivery((food) => {
      console.log(food);
 })

 //useEffect
 useEffect(() => { },[]);
 //useState
 const [man, setMan] = useState(0);

