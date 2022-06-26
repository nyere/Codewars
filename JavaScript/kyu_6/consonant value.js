// https://www.codewars.com/kata/59c633e7dcc4053512000073

const consValue = (string) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const consonants = string.split(/[aeiou]/gi);
    let result = [];
    consonants.forEach((element) => {
        let tempScore = 0;
        let tempSplit = element.split('');
        tempSplit.forEach((el) => {
            tempScore += 1 + alphabet.indexOf(el);
        });
        result.push(tempScore);
    });
    return Math.max(...result);
};

console.log(consValue('zodiac'));
