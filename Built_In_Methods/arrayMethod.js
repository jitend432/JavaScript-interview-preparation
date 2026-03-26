let arr = [1,2,3,4,5]

arr.push(2)  //array ke end me add karta hai
console.log("Push",arr) 

arr.pop()  //array ke end me add karta hai
console.log("pop",arr)

let b = [5,6,7,8,9]
console.log("splice",b.splice(1,3))
console.log("array after splice",b)

let c = [5,6,7,8,9,8,2]
console.log("slice",c.slice(1,3))

let d = [5,6,7,8,9,8,2]
console.log("shift",d.shift()) // shifted element return karta hai  //start me add karta hai
console.log("unshift",d.unshift(12)) //unshifted me length return karta hai // start se remove karta hai
console.log("original array after shift unshift",d)

let n = [4,8,6,7,2,6]
console.log("Reverse",n.reverse())
console.log("sort",n.sort()) // element ko arrange karta hai
console.log("Include",n.includes(6)) //true /false
let res = n.find(x=>x>2)
console.log(res)

let g = [147,857,698]
let x = g.join("-") // convert array to string
console.log(x)
console.log(typeof(x))

let z = [8,5,4,7,8,6,9,6,2,4,1,5,7,8]

console.log("Map Result",z.map(c=> c * 2 )) /// har element pe kam karega new array banayega
console.log("filter Method",z.filter(x=> x>7)) //value filter karna on the conditional basis
console.log("Reduce Method",z.reduce((a,b) => a + b,0)) //sare values ko single value me convert karna */+- on any condition

const number = [2, 4, 6, 8];   // Check karo kya sabhi numbers even hain
const allEven = number.every((num) => num % 2 === 0);
console.log(allEven); // true, sabhi even hain


const numbers = [1, 3, 5, 8, 9];  // Check karo kya array me koi even number hai
const hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven); // true, kyunki 8 even hai