// Write a function which takes two numbers and returns their sum.

// 1. Can I restate the problem in my own words?
"implement addition";
// 2. What are the inputs that go into the problem?
//  ints?
//  floats?
//  what about string for large numbers?
// 3. What are the outputs that should come from the solution to the problem?
//  int? float? string?
// 4. Can the outputs be determined from the inputs? Do I have enough information to solve the problem?
//
// 5. How should I lable the important pieces of data that are a part of the problem?

//  for loop
function charCount(str) {
  var result = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}
console.log(charCount("hello"));

// for of loop
function charCount(str) {
  var result = {};
  for (var char of str) {
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}
console.log(charCount("hello"));
