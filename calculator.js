function sum(a = 0, b = 0) {
  return a + b;
}

function subtract(a = 0, b = 0) {
  return a - b;
}

function divide(a, b = 1) {
  if (b === 0) {
    throw 'Cannot divide by 0';
  }
  return a / b;
}

function multiply(a = 0, b = 1) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
