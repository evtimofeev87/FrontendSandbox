const fs = require('fs');

const getLocObject = (path) => {
  const rawData = fs.readFileSync(path);
  const resultObject = JSON.parse(rawData);
  return resultObject.result;
};

const getDiffObject = (obj1, obj2) => {
  const diff = {};
  for (let key in obj1) {
    if (!obj2[key]) {
      diff[key] = obj1[key];
    }
  }
  return diff;
};

const testLoc = getLocObject('test.json');
const prodLoc = getLocObject('prod.json');

// console.log(`test keys number: ${Object.keys(testLoc).length}`);
// console.log(`prod keys number: ${Object.keys(prodLoc).length}`);

// console.log(getDiffObject(testLoc, prodLoc));
console.table(getDiffObject(prodLoc, testLoc));
