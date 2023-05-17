// Interview Questions on Promises

console.log("1 Question");


console.log('start');

const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
})
promise1.then((res) => console.log(res));

console.log('stop');


//Q.2  Output for the Question


console.log("2 Question");

console.log('start');

const promise = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
    console.log(3)
})
promise.then((res) => console.log(res));

console.log('end');


//3Q
const func = (state) => {
    return new Promise((resolve, reject) => {
        if (state) {
            resolve('resolved')
        } else {
            reject('rejected')
        }
    })
};
const prom = func(true);
prom.then((res) => {
    console.log(res);
    return "Returned String"
}).then((res) => {
    console.log(res);
    return new Error('error thrown') // even though you threw a error it goes to then as its a resolved promise
}).then((res) => {
    console.log("res",res)
}).catch((err) => {
    console.log('err',err)
})

//4.Q

const firstPromise = new Promise((resolve, reject) => {
    resolve('FIRST')
})
const secondPromise = new Promise((resolve, reject) => {
    resolve(firstPromise)
})
secondPromise.then((res) => {
    return res
})
.then(res=>console.log(res))