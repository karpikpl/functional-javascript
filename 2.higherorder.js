/*jshint esversion: 6, node: true*/
function repeat(operation, num) {
    if (num > 0) {
        operation();
        return repeat(operation, --num);
    } else {
        return;
    }
}

module.exports = repeat;
