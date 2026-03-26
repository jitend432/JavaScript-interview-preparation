let a = "Jitendra";

console.log(typeof(a))
let b = parseInt(a)
console.log(typeof(b))


//let url = "https://google.com/user/5842"
let url = "https://test.com/j    c"

let resp = encodeURI(url)
let res = decodeURI(resp)

console.log(resp)
console.log(res)

//string ko JavaScript code ki tarah run karta hai
eval("2 + 2") // 4

isNaN("abc")        // true
isFinite(100)       // true