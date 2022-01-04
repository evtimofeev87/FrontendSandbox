function isPangram(string){
    return (Array.from(new Set(string.toLowerCase().split('').filter( e => /[a-z]/.test(e))))).length === 26
}

const test = "The quick brown fox jumps over the lazy dog.";

console.log(isPangram(test));