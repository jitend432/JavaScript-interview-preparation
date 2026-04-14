function fibonacci(n) {
    let result = "";
    let a = 0;
    let b = 1;

    for(let i = 0; i<=n; i++) {
        result+= a + " "
        
        let next = a + b;
            a = b;
            b = next;
    }
    console.log(result)
}
fibonacci(10)

//--------------------------------------------------------------

function fibo(num, a=0,b=1) {
    if(num <= 1) return num;
    console.log(a)
    return fibo(num-1,b,a+b);
}
fibo(10);