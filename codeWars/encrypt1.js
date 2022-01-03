function encode(string) {
    return [...string].map( e =>  (['a','e','i','o','u'].indexOf(e) + 1) || e).join('');
}

function decode(string) {
    return [...string].map( e => ['a','e','i','o','u'][+e - 1] || e).join('');
}

let encodedString = encode('How are you today?');
let decodedString = decode(encodedString);
console.log(encodedString);
console.log(decodedString);