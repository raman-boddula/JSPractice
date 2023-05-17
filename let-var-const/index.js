const foo = [10];

let boo = foo;

boo[2] = 100;

console.log(foo, boo);


// {
//     let x = 1;
//     const y = 2;
//     var z = 3;
// }


/// z can be accessible outside of a block
/// x & y are not accessible outside of a block


function x() {
    let x = 1;
    const y = 2;
    var z = 3;
}
// console.log(z);
// console.log(x);
// console.log(y);


// you cannot any variable outside of a function ,because functions are ready to take but not to give anything




//array destructuring


let arr = [1, 2, 3, 4, 5];
let [xx, y, z, a, b] = arr;
// console.log(xx, y, z, a, b);


function hoist() {
    console.log(hello);//undefined  , in skimming stage the varible stored as undefined
    var hello = 'hello world'
}


