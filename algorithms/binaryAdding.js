const binaryAdding = (a,b) => {
    const c = [];
    let carry = 0;
    for(let i = 0; i<a.length;i++){
        c[i] = (a[i] + b[i] + carry) % 2;
        carry = a[i] && b[i];
    }
    return c;
}


console.log(binaryAdding([0,1,1,1,0],[1,1,1,1,1]))