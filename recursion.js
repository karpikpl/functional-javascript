/*jshint esversion: 6, node: true*/
function reduce(arr, fn, initial) {
  // fn(previousVal, currentVal, index, arr)
  // console.log(`arr: ${arr} initial: ${initial}`);

  if(arr.length === 0) {
    return initial;
  }

  const current = fn(initial, arr[0], 0, arr);
  return reduce(arr.slice(1), fn, current);
}

module.exports = reduce;

// const result = reduce([1,2,3], function(prev, curr, index, arr) {
//       return prev + curr;
//     }, 0);
// console.log(`result : ${result}`);
