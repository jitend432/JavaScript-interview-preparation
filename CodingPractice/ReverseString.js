const name = "Jitendra Pratap"
console.log(name.split("").reverse().join(""))




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