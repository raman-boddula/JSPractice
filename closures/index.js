const createCounter = () => {
    let counter = 0;
    const incrementCounter = () => {
        counter++;
        console.log(`counter value is    ${counter}`)
    };
    const decrementCounter = () => {
        counter--;
        console.log(`counter value is    ${counter}`);
    }
    const getCounter = () => {
        return counter;
    }
    return { incrementCounter, decrementCounter, getCounter };
}
let counter = createCounter();
counter.incrementCounter();
counter.incrementCounter();
counter.decrementCounter();
console.log(counter.getCounter())