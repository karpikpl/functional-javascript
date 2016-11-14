/*jshint esversion: 6, node: true*/
function repeat(operation, num) {

  // execute all calls in async way
    const intervalID = setInterval(_ => {

        if (num <= 0) {
            return clearInterval(intervalID);
        }

        operation();
        --num;
    });
}

function repeat2(operation, num) {
  if(num <= 0) {
    return;
  }

  operation();

  if(num % 10 === 0) {
    // execute method once in async way
    setTimeout(_ => repeat2(operation, --num));
  } else {
    repeat2(operation, --num);
  }
}

module.exports = repeat2;

// repeat2(_ => {
//     console.log(new Date());
// }, 10);
