// // this solution is taking longer time to execute
// // it has at least 6 operations and it's a loop, it does the operation everytime when it compering i to n
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(addUpTo(6));

// // same result different function (mathematical)
// // looks like this solution is better because it has less operations then the first one
// *, +, / --> 3 operations
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}
console.log(addUpTo2(6));

// // ---------------another example---------------

function countUpAndDown(n) {
  console.log("Going up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down. Bye!");
}
console.log(countUpAndDown(10));

// // ---------------another example---------------

function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
console.log(printAllPairs(5));

// double

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
console.log(double([3, 6, 9]));
