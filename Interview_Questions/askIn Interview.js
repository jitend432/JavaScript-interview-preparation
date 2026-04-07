function c() {
  var a = 10;
  {
    console.log(a);
     let a = 20;
    console.log(a);
  }
  console.log(a); 
}
c();

//-----------------------------------------------
const data = [10, 20, 30, 40];
const [x, , y] = data;
console.log(x + y); // output is 40