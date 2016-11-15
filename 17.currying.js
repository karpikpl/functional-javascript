/*jshint esversion: 6, node: true*/
function curryN(fn, n, args) {
    n = n || fn.length;
    args = args || [];

    if (n == 1) {
        return function() {
            args = args.concat(Array.prototype.slice.call(arguments));
            return fn.apply(this, args);
        };
    }

    return function() {
        args = args.concat(Array.prototype.slice.call(arguments));
        return curryN(fn, --n, args);
    };
}

module.exports = curryN;

function add3(one, two, three) {
    return one + two + three;
}

// var curryC = curryN(add3);
// var curryB = curryC(1);
// var curryA = curryB(2);
// console.log(curryA(3)); // => 6
//console.log(curryA(10)); // => 13

console.log(curryN(add3)(1)(2)(3)); // => 6
