// currying function is a function that can accept a multiple arguments which means
// that on every function invokation return a function that will accept a arguments
// this would continue till we stop invoking the function
function curryingFunc(a) {
    return function (b) {
        if (b) {
            return curryingFunc(a + b);
        } else {
            return a;
        }
    }
}
// console.log(curryingFunc(1)(2)(3)(4)());;


function sum(...argsa) {
    return (...argsb) => {
        if (argsb.length) {
            let s = 0;
            for (let i = 0; i < argsb.length; i++) {
                s+=argsb[i];
            };
            return sum(argsa[0]+s)
        } else {
            return argsa[0];
        }
    }
};
console.log(sum(1)(2,3,10)(4,5,20,30)(6,7,8)())