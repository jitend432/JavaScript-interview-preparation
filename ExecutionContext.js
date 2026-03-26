/*
🧠 1. Execution Context
🔥 Interview Definition

👉
“Execution Context is the environment where JavaScript code is executed.”

⚡ Types:
   Global Execution Context (GEC)
   Function Execution Context (FEC)

*/

var a = 10;

function test() {
    var b = 20;
    console.log(a + b);
}
test();

/*

🧠 Flow:
Global context create hoga
Variables memory me jayenge
test() call → new execution context
Run → destroy

🔍 Important Concepts:
Memory phase (hoisting)
Execution phase
Call stack

🎯 One line:

👉
“JS code step-by-step execution context me run hota hai.”

*/