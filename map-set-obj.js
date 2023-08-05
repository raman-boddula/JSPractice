// Set :- set are used to store a unique values

let arr = [1, 3, 2, 2, 1, 2];
let set = new Set(arr);
// let obj = new Object(arr);
// console.log('obj:', obj) // it will stores a array same as given ,even though it has duplicates
console.log('set:', set) // output here - > 1,3,2
set.add(5)
// console.log(set);
// set.add([9, 4, 5, 6, 7]);
// set.add([9, 4, 5, 6, 7]);
// console.log(set);


set.forEach((x) => console.log(x));

let map = new Map([['chinna','raman'],['x','y']]);
map.set('name', 'raman');
console.log('map', map);
console.log(map.get('name'));


map.forEach(x => console.log(x));

// weakset -> weakset can store only objects and we cant iterate the weakset
// weakset has not get method
let ws = new WeakSet();
let obj = { a: 1 };
let obj1 = { b: 1 };
ws.add(obj,obj1);
console.log('ws:', ws.has(obj))

// weakmap -> weakmap can store object  in key value pairs;

let wm = new WeakMap();
let x = {
    a:1
};
wm.set(x, 'china');
console.log(wm.get(x));