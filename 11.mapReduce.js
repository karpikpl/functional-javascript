/*jshint esversion: 6, node: true*/
function arrayMap(arr, fn) {
  return arr.reduce((prev, cur, index, array) => {
    prev.push(fn(cur));
    return prev;
  }, []);
}

function arrayMap2(arr, fn, thisArg) {
  return arr.reduce((prev, cur, index, array) => {
    prev.push(fn.call(thisArg, cur, index, array));
    return prev;
  }, []);
}

module.exports = arrayMap2;

// const nums = [1,2,3,4,5];
//
// // `map` is your exported function
// const output = arrayMap(nums, function double(item) {
//   return item * 2;
// });
//
// console.log(output); // => [2,4,6,8,10]
