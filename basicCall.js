/*jshint esversion: 6, node: true*/
function duckCount() {
 return Array.prototype.slice.call(arguments)
  .filter(d => Object.prototype.hasOwnProperty.call(d, 'quack'))
  .length;
}

module.exports = duckCount;
