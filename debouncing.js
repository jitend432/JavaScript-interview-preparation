/*
🧠 Interview me killer line
👉 “I implemented debounce to optimize API calls in a search input, reducing unnecessary requests and improving performance.”

🧠 One-line definition (for interview)
"Debounce is a technique that delays function execution until a certain time has passed since the last call."

👉 “Difference between debounce and throttle?”

Say this:

"Debounce delays execution until the user stops triggering the event, while throttle ensures the 
function executes at a fixed interval regardless of how many times the event fires."

⚡ Shortcut yaad rakhne ka
Debounce → stop hone ka wait
Throttle → speed control

fn.apply(thisValue, [arg1, arg2])

*/
function debouncing (fn, delay) {
   let timer = null;

   return function(...args) {
    if(timer) {
       clearTimeout(timer);
    }
    timer = setTimeout(()=>{
        fn.apply(this,args)
    },delay)
   }
}

function search(query) {
    console.log("search : ", query);
}

const debounceSearch = debouncing(search, 500)

debounceSearch("Jit")
debounceSearch("Jite")
debounceSearch("Jiten")
debounceSearch("Jitendra")