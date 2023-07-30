let arr = [2, 4, 3, 6, 4];
Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
};
arr.myForEach((x)=>console.log(x*2))