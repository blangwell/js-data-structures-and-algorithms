const {performance} = require('perf_hooks');

/* 
say we've got two functioning solutions to a problem
how can we determine which one is optimal? 
*/

// write a function that accepts a string
// and returns a reversed copy?
// this is one of MANY possible solutions
function reverseString(str) {
  result = '';
  for (let char of str) {
    result = char + result;
  }
  return result;
}

function reverseStringArr(str) {
  result = [];
  str = str.split('');
  str.forEach(char => result.unshift(char));
  return result.join('');
}

// test the approximate time to run a piece of code
// we import {perfomance} from perf_hooks
let t1 = performance.now();
// console.log(reverseStringArr('Hello World!'))
let t2 = performance.now();
// console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`)

/* 
we use big O notation to discern which is best
it is precise vocabulary to discuss how our code performs
useful for discussing trade offs between different approaches
when code slows or crashes, identifying inefficient code
helps us optimize it

WHAT DOES BETTER MEAN? 
faster? less memory intensive? more readable? brevity?

lets start with speed


*/