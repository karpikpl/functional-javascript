/*jshint esversion: 6, node: true*/

module.exports = Function.call.bind(Array.prototype.slice);

var nums = [1, 2, 3, 4, 5];

var slice = Function.call.bind(Array.prototype.slice);

// your slice function should match the regular
// behaviour of slice, except it takes the array
// as the first argument

slice(nums, 0, 2); // [1, 2]
slice(nums, 1, 2); // [2]

// regular slice usage for comparison
nums.slice(0, 2); // [1, 2]
nums.slice(1, 2); // [2]
