function decompose(n) {
    return [1]
}


const testing = (n, expect) => {
    const res = decompose(n);
    const isSuccess = JSON.stringify(res) === JSON.stringify(expect);
    const color = isSuccess ? '\x1b[32m%s\x1b[0m' : '\x1b[31m%s\x1b[0m';
    const expected = isSuccess ? '' : `, expected [${expect}]`;
    console.log(color, `[${n}] - [${res}]${expected}`);
}

testing(50, [1,3,5,8,49]);
testing(12, [1,2,3,7,9]);
testing(44, [2,3,5,7,43]);
testing(625, [2,5,8,34,624]);
testing(5, [3,4]);