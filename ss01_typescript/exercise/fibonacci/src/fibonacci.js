var fibo1 = 0;
var fibo2 = 1;
var fibo3;
var sum = 0;
var fibos = [];
for (var i = 1; i < 10; i++) {
    fibo3 = fibo1 + fibo2;
    fibos.push(fibo3);
    sum += fibo3;
    fibo1 = fibo2;
    fibo2 = fibo3;
}
console.log("Sum : ".concat(sum));
console.log("D\u00E3y Fibonacci : ".concat(fibos));
