const upperCased = str => {
  let upperCase = str.toUpperCase();
  return upperCase;
};

const firstLetter = str => {
  for (let i = 0; i < str.length; i++) {
    let first = str[0];
    return first;
  }
};

const middleLetter = str => {
  let middle = str[str.length / 2];
  console.log(middle);
  return middle;
};

// console.log(middleLetter('meow'));

module.exports = { upperCased, firstLetter, middleLetter };
