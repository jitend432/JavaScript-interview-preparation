function isPalindrome (str) {
str = str.replace(/\s+/g, '').toLowerCase()
let reversed = str.split("").reverse().join("")
   return str === reversed
}

console.log(isPalindrome("dood"))
