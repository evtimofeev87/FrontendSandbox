// function incrementString (string) {
//     return /\d+$/.test(string) ? string.replace(/\d+$/,m => String(+m + 1).padStart(m.length,'0')) : string + 1;
// }

const incrementString = strng =>
    strng.replace(/[0-8]?9*$/, val => ++val);

console.log('Start...');
console.log(incrementString('foobar000'));
console.log(incrementString('foobar9'));
console.log(incrementString('foobar'));
console.log(incrementString(''));
