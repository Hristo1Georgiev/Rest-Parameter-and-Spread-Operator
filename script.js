function sum(...numbers) {
    return numbers.reduce((prev, current) => prev + current
    )
}
console.log(sum(1, 2, 3, 9, 76));



const total1 = function (num1, num2, num3) {
    return num1 + num2 + num3;
}
const cijfers = [1, 5, 9];

console.log(total1(...cijfers));
