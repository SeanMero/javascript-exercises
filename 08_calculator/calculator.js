const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let answer = 0;
  for (let i in arr) {
    answer += arr[i];
  }
  return answer;
};

const multiply = function(arr) {
  let answer = 1;
  for (let i in arr) {
    answer *= arr[i];
  };
  return answer;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
	let answer = 1;
  for (let i = a; i >= 0; i--) {
    if (i === 0) {
    continue
    } else {
      answer *= i};
  };
  return answer;  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
