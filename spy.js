/*jshint esversion: 6, node: true*/
function Spy(target, method) {
    const original = target[method];
    let result = {
        count: 0,
        toString: _ => {
            return `spy on ${target.constructor.name} method '${method}' called ${result.count} times`;
        }
    };

    target[method] = function() {
        result.count++;
        return original.apply(this, arguments);
    };

    return result;
}

module.exports = Spy;

const spy = Spy(console, 'error');

// console.error('error 1');
// console.error('error 2');
// console.error('error 3');
//
// console.log(spy.toString());
// console.log(spy.count);
