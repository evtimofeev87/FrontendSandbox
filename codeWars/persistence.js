function persistence(num, count = 0, numStr = String(num)) {
    return numStr.length === 1 ? count : persistence([...numStr].reduce((p,c) => +p * +c,1), count + 1)
}

console.log('Start');

console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));