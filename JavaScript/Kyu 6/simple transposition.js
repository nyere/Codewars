// https://www.codewars.com/kata/simple-transposition

function simpleTransposition(text) {
    let a = '';
    let b = '';
    for (let i = 0; i < text.length; ++i) {
        if (i % 2 === 0) {
            a += text[i];
        } else {
            b += text[i];
        }
    }
    return a + b;
}
