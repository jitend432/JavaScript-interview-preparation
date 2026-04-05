/*

JavaScript offers call(), apply(), and bind() to control the value of this inside functions. 
These methods are useful for managing function context, especially in object-oriented scenarios.

THIS KEYWORD =>
"this refers to the object that is calling the function. It is used to access properties of that object."

🔥 Correct statement
Arrow function apna this khud create nahi karta, balki outer scope se le leta hai

*/
const user = {
    name: "Jitendra"   
};

const other = {
    name: "kamyar"
}

function hh (age) {
    console.log(`mai ${this.name} hu aur mai ${age} ka hu`)
}

//🔥 call()    👉 Direct call karta hai
hh.call(user,25)

// 🔥 apply()  👉 Same as call, but arguments array me
hh.apply(user,[15])

//🔥 bind()  👉 Function return karta hai (turant call nahi hota)
const newFunc = greet.bind(person1, 28);
newFunc();