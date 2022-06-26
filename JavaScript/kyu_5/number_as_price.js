// https://www.codewars.com/kata/5318f00b31b30925fd0001f8

const numberToPrice = (number) => {
    if (typeof number !== 'number') {
        return 'NaN';
    }
    let numbers = [];
    if (number !== Math.trunc(number)) {
        numbers = number.toString().split('.');
        if (numbers[1].length < 2) {
            numbers[1] += '0';
        }
        numbers[1] = numbers[1].slice(0, 2);
    } else {
        numbers[0] = number;
        numbers[1] = '00';
    }
    const numberFormat = new Intl.NumberFormat('en-EN');
    return `${numberFormat.format(numbers[0])}.${numbers[1]}`;
};
