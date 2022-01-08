const addingToEnd = n => {
    const startTime = new Date();
    const arr = [];
    for(let i = 0; i < n; i++) {
        arr.push('a');
    }
    const endTime = new Date();
    console.log(`pushing - ${endTime - startTime}`);
}

const addingToStart = n => {
    const startTime = new Date();
    const arr = [];
    for(let i = 0; i < n; i++) {
        arr.unshift('a');
    }
    const endTime = new Date();
    console.log(`unshifting - ${endTime - startTime}`);
}

const n = 500000;
addingToEnd(n);
addingToStart(n);




