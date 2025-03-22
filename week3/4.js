function createCounter() {
    let counter = 0;
    return allInOne = {
        Increment() {counter++;},
        decrement() {counter--;},
        reset() {counter = 0},
        current() {return counter;} 
    }
}

counterAccess = createCounter()
console.log(counterAccess)
counterAccess.Increment()
console.log(counterAccess.current())
counterAccess.reset()
console.log(counterAccess.current())