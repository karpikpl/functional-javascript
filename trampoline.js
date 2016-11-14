/*jshint esversion: 6, node: true*/
function repeat(operation, num) {
    if (num <= 0) return;
    operation();
    return _ => repeat(operation, --num);
}

function trampoline(fn) {
    while (fn) {
        fn = fn();
    }
}

module.exports = function(operation, num) {
    return trampoline(_ => repeat(operation, num));
};

// let count = 0;
// const start = new Date();
// module.exports(function() {
//     count++;
// }, 100000);
//
// console.log('executed %d times in %d ms', count, new Date() - start);
//=> RangeError: Maximum call stack size exceeded
