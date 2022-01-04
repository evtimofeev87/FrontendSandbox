function highestRank(arr){
    const numFreqObj = arr.reduce( (acc,curr) => ({...acc,[curr]: acc[curr] ? ++acc[curr] : 1}),{});
    const maxCount = Math.max(...Object.values(numFreqObj));
    return  +Object.entries(numFreqObj)
        .filter( e => e[1] === maxCount)
        .sort((a,b)=> b[0] - a[0])[0][0];
}

testArr = [12,10,8,8,3,3,3,3,2,4,10,12,10];

console.log(highestRank(testArr));