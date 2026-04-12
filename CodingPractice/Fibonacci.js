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