/*
"Throttle is commonly used in scroll, resize, and mouse move events to improve performance by 
limiting how often expensive operations run."

👉 Real use of throttle:
Infinite scroll
Lazy loading images
User window resize karta hai → continuous events
Mouse move → har pixel pe event fire hota hai
In game ---->  Player movement / shooting events


*/

//✍️ Throttle Function (from scratch)

function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}



const log = () => console.log("Scroll event");

const throttledLog = throttle(log, 1000);

window.addEventListener("scroll", throttledLog);