let obj = {};

const t0 = performance.now();
for(let i = 0; i<1000000; i++){
    obj[i] = 2;
}
const t1 = performance.now();
console.log(`t1 - t0 - ${t1-t0}`)
let sum = 0;
for(let i in obj){
    sum += obj[i];
}
const t2 = performance.now();
console.log(`t2 - t1 - ${t2-t1}`)
console.log(sum);
const keys =  Object.keys(obj);
for(let keyIndex = 0; keyIndex < keys.length;   keyIndex++){
    sum += obj[keys[keyIndex]];
}
const t3 = performance.now();

console.log(`t3 - t2 - ${t3-t2}`)
console.log(sum);