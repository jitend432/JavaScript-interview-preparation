/*

🔥 Thoda aur strong version (impress interviewer)

“JavaScript is single-threaded, so it uses the event loop to handle asynchronous operations. 
The event loop monitors the call stack and queues. When the stack becomes empty, it first 
processes all microtasks, such as Promise callbacks, and then processes macrotasks like 
setTimeout callbacks.”

🧠 Agar interviewer bole “explain simply”

“The event loop is responsible for managing asynchronous behavior in JavaScript by ensuring 
that tasks from queues are executed only when the call stack is free.”

------------------------------------------------------------------------------------------------

⚙️ 2. Core Components (ye interviewer ko bolna MUST hai)

Event loop ko samajhne ke liye 4 cheeze yaad rakho:

1. Call Stack
Jaha synchronous code execute hota hai
LIFO (Last In First Out)

2. Web APIs (Browser/Node APIs)
setTimeout
fetch
DOM events

➡️ Ye JS engine ka part nahi hote

3. Callback Queue (Macrotask Queue)
setTimeout callbacks
setInterval
event listeners

4. Microtask Queue (High Priority)
Promises (.then, .catch)
queueMicrotask

5. Event Loop (main hero 😎)
Check karta hai:
👉 "Call stack empty hai kya?"
👉 Agar haan → queue se task uthao

🔁 3. Execution Flow (IMPORTANT 🔥)

Step by step:

Synchronous code → Call Stack me execute hota hai
Async code → Web API ko de diya jata hai
Jab ready ho jaye → Queue me push hota hai
Event Loop:
Pehle microtask queue
Phir callback queue

🤯 5. Why Promise runs before setTimeout?

👉 Because:

Promise → Microtask queue
setTimeout → Callback queue

✅ Rule:

Microtasks always execute before Macrotasks

*/

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

/*output
    Start
    End
    Promise
    Timeout
*/