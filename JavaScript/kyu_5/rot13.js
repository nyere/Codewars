// https://www.codewars.com/kata/530e15517bc88ac656000716

const rot13 = (message) => {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const bigAlpha = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    const result = [];

    message.split('').forEach((el) => {
        if (alpha.includes(el)) {
            if (alpha.indexOf(el) + 13 > 25) {
                result.push(alpha[alpha.indexOf(el) - 13]);
            } else {
                result.push(alpha[alpha.indexOf(el) + 13]);
            }
        } else if (bigAlpha.includes(el)) {
            if (bigAlpha.indexOf(el) + 13 > 25) {
                result.push(bigAlpha[bigAlpha.indexOf(el) - 13]);
            } else {
                result.push(bigAlpha[bigAlpha.indexOf(el) + 13]);
            }
        } else {
            result.push(el);
        }
    });

    return result.join('');
};
