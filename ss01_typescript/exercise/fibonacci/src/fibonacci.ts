let fibo1: number = 0;
let fibo2: number =1;
let fibo3: number;
let sum: number = 0;
let fibos: Array<number> =[];

for(let i =1 ; i < 10; i++){
    fibo3 = fibo1 + fibo2;
    fibos.push(fibo3);
    sum += fibo3;
    fibo1 = fibo2;
    fibo2 = fibo3;
}

console.log(`Sum : ${sum}`);
console.log(`Dãy Fibonacci : ${fibos}`);