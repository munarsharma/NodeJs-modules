const sum = (num1, num2) => {
  return num1 + num2;
};

// console.log(sum(3, 6));

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const square = num1 => {
  return num1 * num1;
};

module.exports = { sum, multiply, divide, square };
