/*
“A Promise in JavaScript is an object that represents the eventual completion or failure of an
 asynchronous operation and its resulting value.”

👉 Short version:
“Promise handles async operations and avoids callback hell.”

📊 Promise ke 3 States
Pending → initial state
Fulfilled (Resolved) → success
Rejected → failure

Key Points (interview ke liye)
          Promise async code ko handle karta hai
          Callback hell ko avoid karta hai
          .then() → success handle
          .catch() → error handle
          .finally() → always run


     🧠 🔥 Interview Definition     
     👉
     “async/await is syntactic sugar over Promises that makes asynchronous code look like synchronous code.”

     👉 Short:
     “It simplifies Promise handling.”

     ⚙️ Basic Rules
            1️⃣ async function
            Hamesha Promise return karta hai
            
            2️⃣ await
            Sirf async function ke andar use hota hai
            Promise ka result wait karta hai

*/

const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Data mil gaya");
    } else {
        reject("Error aa gaya");
    }
});

myPromise
    .then((res) => console.log(res))   // success
    .catch((err) => console.log(err)); // error

    //=============================================================================================================//
    // Real-life Example (interview me use karna)

    function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User data aa gaya");
        }, 2000);
    });
}

fetchData()
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

   //================================================================================================================//
   //Async/Await Version (Modern)
   
   async function getData() {
    try {
        let res = await fetchData();
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}
getData();