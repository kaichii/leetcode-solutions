function fib(n) {
    if (n === 1 || n === 2) {
        return 1;
    }

    let p = 1,
        c = 1;

    for (let i = 3; i <= n; i++) {
        var sum = p + c;
        p = c;
        c = sum;
    }

    return sum;
}

console.log(fib(10) === fib(9) + fib(8));
