const { create, all } = require('mathjs');

const config = {
  number: 'BigNumber', // Default type of number:
  // 'number' (default), 'BigNumber', or 'Fraction'
  precision: 64, // Number of significant digits for BigNumbers
};

const math = create(all, config);

math.config({
  number: 'BigNumber',
});

console.log('Start checkMath');

const a = math.bignumber(2);
const b = math.bignumber(1000000000000000);

console.log(math.pow(a, b).toString());
