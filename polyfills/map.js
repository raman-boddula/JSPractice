let arr = [2, 4, 3, 6, 4];
Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
}
console.log(arr.map((el) => el * 2));