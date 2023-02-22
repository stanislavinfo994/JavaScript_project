function value() {
    let counter = 0;
    return function (dogCounter) {
        counter += dogCounter
        return counter;
    }
}
const valueRes = value()
console.log(valueRes(3));
console.log(valueRes(5));
console.log(valueRes(20));