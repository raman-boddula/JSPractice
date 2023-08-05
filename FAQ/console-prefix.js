let originalLog = console.log;

console.log = function (...args) {
    let prefix = 'raman';
    originalLog.apply(console, [prefix, ...args]);
};


console.log('chinna - 1');
console.log('chinna - 2');
console.log('chinna - 3');
console.log('chinna - 4');