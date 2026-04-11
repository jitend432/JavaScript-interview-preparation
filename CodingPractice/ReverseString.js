const name = "Jitendra Pratap"
console.log(name.split("").reverse().join(""))

//----------------------------------------------------

function reverseInteger(num) {
    
    let reversed = 0;
    let isNegative = num<0;
    num = Math.abs(num);

    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num/10);
    }
    return isNegative ? -reversed : reversed;

}
console.log(reverseInteger(12345))

//--------------------------------------------------------------

// Reverse String Recurtion
function reverseString(str) {
    if(str==="") return "";
    return reverseString(str.substring(1)) + str[0]
}
console.log(reverseString("Jitendra Pratap"))

//-------------------------------------------------------------

function reverse(str) {
    let rev = [];
    for(let i = str.length-1; i>=0; i--) {
        rev.push(str[i])
    }
    return rev.join("");
}
console.log(reverse("Jitendra"));

//---------------------------------------------------------------
