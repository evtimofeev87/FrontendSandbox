const longestPalindrome = s => {
    if(!s.length) return 0;
    if(s.length === 1) return 1;
    let maxPalindromeLength = 1;
    for(let length = 2; length <= s.length ;length++) {
        for(let position = 0; position <= (s.length - length);position++) {
            const sub = s.substr(position,length);
            const halfLength = Math.ceil(length/2);
            const isPalindrome = sub.slice(0, halfLength) === [...sub.slice(-halfLength)].reverse().join('');
            if(isPalindrome && length > maxPalindromeLength) {
                maxPalindromeLength = length;
            }
        }
    }
    return maxPalindromeLength;
}

const testing = (str, expect) => {
    const res = longestPalindrome(str);
    const color = res === expect ? '\x1b[32m%s\x1b[0m' : '\x1b[31m%s\x1b[0m';
    const expected = res === expect ? '' : `, expected ${expect}`;
    console.log(color, `${str} - ${res}${expected}`);
}

testing('a', 1);
testing('aa', 2);
testing('baa', 2);
testing('aab', 2);
testing('zyaayz', 6);
testing('baabcd', 4);
testing('baablkj12345432133d', 9);