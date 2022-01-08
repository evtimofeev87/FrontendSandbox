const insertionSort = array => {
    for(let j = 1; j < array.length;j++){
        const key = array[j];
        let i = j - 1;
        while (i >= 0 && array[i] > key){
            array[i+1] = array[i];
            i--;
        }
        array[i+1] = key;
    }
    return array;
}

const testing = (input, result, expect) => {
    const isSuccess = JSON.stringify(result) === JSON.stringify(expect);
    const color = isSuccess ? '\x1b[32m%s\x1b[0m' : '\x1b[31m%s\x1b[0m';
    const expected = isSuccess ? '' : `, expected ${expect}`;
    console.log(color, `${input} - ${result}${expected}`);
}

const testingVals = [
    [1,5,2,8,4,6,3],
    [8,3,5,3,8,4,1,3,0,4,3],
    [1],
    []
]
testingVals.forEach( testingVal => testing(testingVal,insertionSort(testingVal),testingVal.sort()));
