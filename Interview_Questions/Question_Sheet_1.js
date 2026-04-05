/*
What is the difference between lexical scope and dynamic scope? 

🔥 Short Answer

Lexical scope → code likhte time decide hota hai (where function is defined)
Dynamic scope → runtime pe decide hota hai (how function is called)

🧠 Deep samjho
🔹 1. Lexical Scope (Static Scope)

👉 “Lexical” = code structure / position

Function kaha likha hai → uske basis pe variables milte hain
JavaScript me ye hi use hota hai */

//Example:
const name = "Global";

function outer() {
  const name = "Outer";

  function inner() {
    console.log(name);
  }

  inner();
}
outer();

/* 👉 Output:  Outer

✔ Kyun?

inner function outer ke andar likha hai
Isliye usko outer ka name milega
🔹 2. Dynamic Scope

👉 “Dynamic” = kaise call kiya gaya

Function ko kisne call kiya → us basis pe variable milega
JavaScript me ye by default nahi hota
Same example agar dynamic hota:    */

const namee = "Global";

function inner() {
  console.log(namee);
}

function outer() {
  const namee = "Outer";
  inner();
}

outer();

/* 👉 Dynamic scope me output hota:

Outer

👉 But JS me actual output:

Global

✔ Kyun?

JS lexical scope follow karta hai
inner global me defined hai → wahi ka scope lega
⚡ Key Difference Table
Feature	Lexical Scope	Dynamic Scope
Decide kab hota hai	Compile / writing time	Runtime
Based on	Function kaha likha hai	Function kaise call hua
JavaScript	✅ Yes	❌ No
🎯 Interview One-liner

"Lexical scope is determined by where functions are defined in the code, while dynamic scope depends on how functions are invoked at runtime. JavaScript uses lexical scope."

🧃 Simple yaad trick
Lexical → “Location matters” 📍
Dynamic → “Calling matters” 📞


*/

//4. What is the output? 
JavaScript
const obj = { 
name: 'JS', 
getName: () => console.log(this.name) 
} 
obj.getName()
// output =  undefine
//Arrow function apna this khud create nahi karta, balki outer scope se le leta hai