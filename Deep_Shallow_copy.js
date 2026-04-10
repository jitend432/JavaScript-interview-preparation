/*
🎯 Best Interview Answer (Short)

👉
“In JavaScript, a shallow copy only copies the top-level properties, and nested objects still share the same reference.
A deep copy, on the other hand, creates a completely independent copy of the object, including all nested levels.”

💬 If interviewer says “explain more”

👉
“In a shallow copy, if we modify a nested object, it also affects the original object because both share the same reference.
But in a deep copy, all levels are copied, so changes in the copied object do not affect the original one.”

⚡ Example line (to impress)

👉
“For example, the spread operator creates a shallow copy, whereas structuredClone() creates a deep copy.”

🧠 Strong closing line

👉
“So the key difference is that shallow copy shares references, while deep copy creates completely independent objects.”

👉
“Shallow copy me sirf top-level properties copy hoti hain, lekin nested objects same reference share karte hain.
Deep copy me poora object recursively copy hota hai aur koi reference share nahi hota.”

*/

// Shallow copy
let obj1 = {
  name: "Jitu",
  address: { city: "Gorakhpur" }
};

let obj2 = { ...obj1 };

obj2.address.city = "Delhi";

console.log(obj1.address.city); // Delhi 😱

//Deep copy
let objj1 = {
  name: "Jitu",
  address: { city: "Gorakhpur" }
};

let objj2 = structuredClone(obj1);

obj2.address.city = "Delhi";

console.log(obj1.address.city); // Gorakhpur ✅