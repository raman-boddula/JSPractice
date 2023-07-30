let arr = [2, 4, 3, 6, 4];
Array.prototype.myReduce = function (cb,initialValue) {
    let acc = initialValue ;
    for (let i = 0; i < this.length; i++){
        acc = acc ? cb(acc, this[i], i, this) : this[i];
    }
    return acc;
}

let x = arr.myReduce((acc,curr)=>acc+curr)
console.log('x:', x)