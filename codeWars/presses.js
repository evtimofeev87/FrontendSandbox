function presses(phrase) {
    const keyObj = { '♈':1,'♉':2,'♊':3,'♋':4,'♌':5 }
    return phrase.toLowerCase()
        .replace(/[adgjmptw 1]/g,'♈')
        .replace(/[behknqux0]/g,'♉')
        .replace(/[cfilorvy]/g,'♊')
        .replace(/[sz234568]/g,'♋')
        .replace(/[79]/g,'♌')
        .split('').reduce((p,c)=> p + keyObj[c],0)
}

const test = "WHERE DO U WANT 2 MEET L8R";
console.log(presses(test));

// ------- ------- -------
// |     | | ABC | | DEF |
// |  1  | |  2  | |  3  |
// ------- ------- -------
//     ------- ------- -------
// | GHI | | JKL | | MNO |
// |  4  | |  5  | |  6  |
// ------- ------- -------
//     ------- ------- -------
// |PQRS | | TUV | | WXYZ|
// |  7  | |  8  | |  9  |
// ------- ------- -------
//     ------- ------- -------
// |     | |space| |     |
// |  *  | |  0  | |  #  |
// ------- ------- -------