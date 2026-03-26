let obj = {name:"Jitu", age:22}

let str = JSON.stringify(obj)  //JavaScript object → string me convert karta hai
let objj = JSON.parse(str)  //string → wapas object me convert karta hai
console.log("String",str)
console.log("Object",objj)