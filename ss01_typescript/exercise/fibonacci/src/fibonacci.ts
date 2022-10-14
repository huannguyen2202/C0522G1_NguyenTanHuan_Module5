function strFibonaccy(count: number): string {
    let firstNumber: number = 0;
    let secondNumber: number = 1;
    let nextNumber: number;
    let sum: number = firstNumber+secondNumber;
    let fibos:Array<number> =[0,1];

    for (let i = 2; i < count; i++) {
        nextNumber = firstNumber + secondNumber;
        fibos.push(nextNumber);
        sum += nextNumber;
        firstNumber = secondNumber;
        secondNumber = nextNumber;
    }
    return "Tong so fibo:"+ sum + " Day fibo: " + fibos;
}
console.log(strFibonaccy(5));