function encrypt(text, n) {
    if( n <= 0 || !text ) return text;
    const arr = text.split('');
    return encrypt([
        ...arr.filter((e,i) => i % 2),
        ...arr.filter((e,i) => !(i % 2))
    ].join(''), n - 1);
}

function decrypt(encryptedText, n) {
    if( n <= 0 || !encryptedText ) return encryptedText;
    let oddArr = encryptedText.split('');
    let evenArr = oddArr.splice(0,Math.floor(encryptedText.length/2));
    return decrypt(oddArr.map( (e, i) => oddArr[i] + (evenArr[i] ? evenArr[i] : '') ).join(''),n - 1);
}
console.log('Start testing');
// const testString = 'This is a test!';
// console.log(encrypt(testString,1));

const testString = 'hsi  etTi sats!'
console.log(decrypt(testString,1));