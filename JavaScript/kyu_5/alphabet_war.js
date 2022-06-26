// https://www.codewars.com/kata/59473c0a952ac9b463000064

const alphabetWar = (fight) => {
    const left = ['w', 'p', 'b', 's'];
    const right = ['m', 'q', 'd', 'z'];
    const points = [4, 3, 2, 1];
    let word = fight.split('');

    let leftScore = 0;
    let rightScore = 0;

    for (let i = 0; i < word.length; i++) {
        if (left.includes(word[i])) {
            if (word[i - 1] === 'j' || word[i + 1] === 'j') {
                if (word[i - 1] === 't' || word[i + 1] === 't') {
                    leftScore += points[left.indexOf(word[i])];
                    continue;
                } else {
                    word[i] = right[left.indexOf(word[i])];
                    rightScore += points[right.indexOf(word[i])];
                    continue;
                }
            }
            leftScore += points[left.indexOf(word[i])];
            continue;
        }
        if (right.includes(word[i])) {
            if (word[i - 1] === 't' || word[i + 1] === 't') {
                if (word[i - 1] === 'j' || word[i + 1] === 'j') {
                    rightScore += points[right.indexOf(word[i])];
                    continue;
                } else {
                    word[i] = left[right.indexOf(word[i])];
                    leftScore += points[left.indexOf(word[i])];
                    continue;
                }
            }
            rightScore += points[right.indexOf(word[i])];
            continue;
        }
    }

    if (leftScore > rightScore) {
        return 'Left side wins!';
    }
    if (rightScore > leftScore) {
        return 'Right side wins!';
    }
    return `Let's fight again!`;
};
