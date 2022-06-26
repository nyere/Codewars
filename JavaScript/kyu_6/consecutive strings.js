// https://www.codewars.com/kata/consecutive-strings

function longestConsec(strarr, k) {
    let result = '';
    if (strarr.length === 0 || k > strarr.length || k <= 0) {
        return result;
    }
    let longest = 0;
    for (let i = 0; i < strarr.length; ++i) {
        let string = strarr.slice(i, i + k).join('');
        if (string.length > longest) {
            longest = string.length;
            result = string;
        }
    }
    return result;
}
