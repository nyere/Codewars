// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

const highesctScoringWord = (words) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    words = words.split(' ');
    let winner = '';
    let highest = 0;
    for (let i = 0; i < words.length; i++) {
        let current = 0;
        for (let j = 0; j < words[i].length; j++) {
            current += 1 + alphabet.indexOf(words[i][j]);
        }
        if (current > highest) {
            highest = current;
            winner = words[i];
        }
    }
    return winner;
};

console.log('azc'.charCodeAt(1) - 96);
