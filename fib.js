function fib(n) {
    if (n === 1 || n === 2) {
        return 1;
    }

    let p = 1,
        c = 1;

    let sum = 0;

    for (let i = 3; i <= n; i++) {
        sum = p + c;
        p = c;
        c = sum;
    }

    return sum;
}

console.log(fib(10) === fib(9) + fib(8));
