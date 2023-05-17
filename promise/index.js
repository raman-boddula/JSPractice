const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let x = true;
        if (x) resolve('Hey resolved');
        else reject('Hey rejected');
    }, 2000)
})
// if console the promise you get the output as pending then after 2 sec it will be fullfilled/rejected.

// promise.then((res) => console.log(res)).catch(err => console.error(err)).finally(
//     console.log('Hey')
// )


// Hey
// Hey resolved 


function A(a, cb) {
    setTimeout(() => {
        cb(`A function ${a}`)
    }, 100)

}
function B(b, cb) {
    setTimeout(() => {
        cb(`B function ${b}`)
    }, 10)

}
function C(c, cb) {
    setTimeout(() => {
        cb(`C function ${c}`)
    }, 5)
}
// callback hell 

// let x = A('A messsage', (msg) => {
//     console.log(msg);
//     B('B message', (msg) => {
//         console.log(msg);
//         C('C message', (msg) => {
//             console.log(msg)
//             A('A messsage', (msg) => {
//                 console.log(msg);
//                 B('B message', (msg) => {
//                     console.log(msg);
//                     C('C message', (msg) => {
//                         console.log(msg)
//                     })
//                 });
//             })
//         })
//     });
// })





// To avoid / overcome this problem , we have promises

/*
Example :
Mother : Says to son , do clean your room and go out for play
Son : Says ok to mom 

Here , the promise has established between mom and son for room clean

if( son cleans his room) then its completed / fullfilled.He can go and play the cricket.
else he cannot go out as hes did not cleaned the room (rejected state/pending state)

*/


function promiseOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('PromiseOne resolved')
        },100)
    })
}
function promiseTwo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('PromiseTwo resolved')
        }, 100)
    })
}
function promiseThree() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('PromiseThree resolve')
        }, 10)
    })
}

// Promise hell we say but this is much better than call back hell
/*
promiseOne().then((res) => {
    console.log(res);
    promiseTwo().then((res) => {
        console.log(res);
        promiseThree().then((res) => {
            console.log(res)
        })
    })
})
*/

// another way like returning a new promise on resolve of first promise

/*
promiseOne().then((res) => {
    console.log(res);
    return promiseTwo();
}).then((res) => {
    console.log(res);
    return promiseThree();
}).then((res) => {
    console.log(res);
})
*/

// we have promise combinator such as promise.all  , promise.race, promise.allSettled ...etc


/// 1. Promise.all is takes array of promises and returns the array of results of promises 
/// if any one of the promise got failed then it will return the failed promise which fails first

/*
Promise.all([
    promiseOne(),
    promiseTwo(),
    promiseThree()
]).then(res => console.log(res)).catch(err => console.log("err", err));

*/

/// 2. Promise.race is takes array of promises and returns the which ever the first promise is rejected or resolved first

/*
Promise.race([promiseOne(), promiseTwo(), promiseThree()]).then((res) => console.log(res)).catch(err => console.log("err", err));
*/

//3. Promise.allSettled is takes array of promises and returns the array of promises results , it wont care of fullfilled or rejected , it will gives the array of results 


/*

Promise.allSettled([
    promiseOne(),
    promiseTwo(),
    promiseThree()
]).then((res) => console.log(res)).catch(err => console('err', err))
*/

/* output : 
[
    { status: 'rejected', reason: 'PromiseOne resolved' },
    { status: 'fulfilled', value: 'PromiseTwo resolved' },
    { status: 'fulfilled', value: 'PromiseThree resolve' }
] 
*/

// 4. Promise.any is takes the array of promises and return the promise promise which is fullfilled and ignore all the rejected promises
 // if all the promises are rejected then it such case it will return the message as all the promises are rejected
/*
    [AggregateError: All promises were rejected] {
        [errors]: [
            'PromiseOne resolved',
            'PromiseTwo resolved',
            'PromiseThree resolve'
        ]
    } 
*/

Promise.any([promiseOne(), promiseTwo(), promiseThree()]).then(res => console.log(res)).catch(err => console.log(err));