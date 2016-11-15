/*jshint esversion: 6, node: true*/
function curryN(fn, n, args) {
  n =  n || fn.length;
  args = (args || []);

    return function() {
        let localArgs = args.concat(arguments[0]);

        if(n == 1) {
          return fn.apply(this, localArgs);
        }
        return curryN(fn, n-1, localArgs);
    };
}

module.exports = curryN;

// function add3(one, two, three) {
//   return one + two + three;
// }
//
// var curryC = curryN(add3);
// var curryB = curryC(1);
// var curryA = curryB(2);
// console.log(curryA(3)); // => 6
// console.log(curryA(10)); // => 13
//
// console.log(curryN(add3)(1)(2)(3)); // => 6
