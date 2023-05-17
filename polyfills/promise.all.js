function promiseOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('PromiseOne resolved')
        }, 100)
    })
}
function promiseTwo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('PromiseTwo reject')
        }, 100)
    })
}
function promiseThree() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('PromiseThree resolve')
        }, 10)
    })
}

Promise.myPromiseAll = (promises) => {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then((value) => {
                results[index] = value;
                completed++;
                if (completed === promises.length) {
                    resolve(results)
                }
            }).catch(err=>reject(err))
        })
    })
}


Promise.myPromiseAll([
    promiseOne(), promiseTwo(), promiseThree()
]).then((res) => console.log("result",res)).catch((err) => console.log("error",err))