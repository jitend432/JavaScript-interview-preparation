const str = "Jitendra Pratap";

// str.length


console.log(str.charAt(3));
console.log(str.padStart(19,"The ")); // Total number and what to add 
console.log(str.padEnd(20,"xxxx"))
console.log(str.includes("Jit"));
console.log(str.indexOf("t"));
console.log(str.lastIndexOf("p"));
console.log("Slice -->",str.slice(-5,13));         //negative index support karta hai
console.log("Substring -->",str.substring(-5,13));     //negative ko 0 treat karta hai
console.log(str.replace("Jit","Sur"));
console.log(str.replaceAll("a","x"))
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log("Trim -->",str.trim());        //string ke start aur end ke extra spaces hata deta hai    
console.log("Split --> ",str.split(""))  //string ko array me tod deta hai
console.log(str.length)

//================================================================================================================//

// Difference between substring and slice

let s = "JituBhaiya"

str.slice(0,4)   // "Jitu"
str.slice(-5)    // "haiya"

let st = "hello"

// start > end
str.slice(4,1)      // "" (empty)
str.substring(4,1)  // "ell" (swap kar diya) //swap kar deta hai    👉 (4,1) → (1,4)

//=========================================================================================================//
