// let obj = { a: 1, b: 2 };

let obj = {
  name: "Jitu",
  age: 22,
  city: "Delhi"
}

Object.keys(obj)
Object.values(obj)
Object.entries(obj)

Object.assign({}, obj)
Object.freeze(obj)
Object.seal(obj)

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))
console.log(Object.assign(obj))  //Do copy merge clone
console.log(Object.freeze(obj))
console.log(Object.seal(obj))


let objj = {a:1}

Object.seal(obj)

objj.a = 2     // ✅ change ho sakta hai
objj.b = 3     // ❌ add nahi hoga
delete objj.a  // ❌ delete nahi hoga

console.log(obj) // {a:2}

let obbj = {a:1}


Object.freeze(obj)

obbj.a = 2       // ❌ change nahi hoga
obbj.b = 3       // ❌ add nahi hoga
delete obbj.a    // ❌ delete nahi hoga

console.log(obbj) // {a:1}