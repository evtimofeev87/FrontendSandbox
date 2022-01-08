const chooseSort = arr => {
    for(let j = 0; j < (arr.length - 1);j++){
        let minVal = arr[j];
        let minIndex = j;
        for(let i = j; i < (arr.length - 1);i++){
            if(arr[i] < minVal){
                minVal = arr[i];
                minIndex = i;
            }
        }
        const temp = arr[j];
        arr[j] = arr[minIndex];
        arr[minIndex] = temp;
        arr.unshift(arr.splice(minIndex,1)[0]);
    }
    return arr;
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
    [6,3],
    []
]
testingVals.forEach( testingVal => testing(testingVal,chooseSort(testingVal),testingVal.sort()));