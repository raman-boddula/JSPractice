// pipe and compose are the higher order functions
// The are used to combine the multiple functions to create a single function out of it.
// compose works -> right to left 
// pipe works -> left to right 

// COMPOSE: 
let addValueT = (value) => value + 5;

let multiplyBy5 = (value) => value * 5;

let squareIt = (value) => value * value;

// using loops
const myPipe = (...fns) => {
    return (initValue)=> {
        let result = initValue;
        for (let f of fns) {
            result = f(result);
        };
        return result;
    }
}
let x = myPipe(addValueT, multiplyBy5, squareIt)(5);
console.log(x);
const myCompose = (...fns) => {
    return (initValue) => {
        let result = initValue;
        for (let i = fns.length - 1; i >= 0; i--) {
            result = fns[i](result)
        }
        return result;
    }
};
let y = myCompose(addValueT, multiplyBy5, squareIt)(5);
console.log(y);
