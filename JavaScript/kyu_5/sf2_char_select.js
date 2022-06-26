// https://www.codewars.com/kata/58583922c1d5b415b00000ff

const superStreetFighterSelection = (fighters, position, moves) => {
    const selectedChars = [];
    let x = position[0];
    let y = position[1];

    moves.forEach((move) => {
        if (move === 'up') {
            if (x === 0) {
                x = 0;
            } else if (fighters[x - 1][y] === '') {
                x = x;
            } else {
                x = x - 1;
            }
        } else if (move === 'down') {
            if (x === fighters.length - 1) {
                x = x;
            } else if (fighters[x + 1][y] === '') {
                x = x;
            } else {
                x = x + 1;
            }
        } else if (move === 'left') {
            if (y === 0) {
                y = fighters[1].length - 1;
            } else {
                y--;
            }
            while (fighters[x][y] === '') {
                if (y === 0) {
                    y = fighters[1].length - 1;
                } else {
                    y--;
                }
            }
        } else if (move === 'right') {
            if (y === fighters[x].length - 1) {
                y = 0;
            } else {
                y++;
            }
            while (fighters[x][y] === '') {
                if (y === fighters[1].length - 1) {
                    y = 0;
                } else {
                    y++;
                }
            }
        }
        selectedChars.push(fighters[x][y]);
    });

    return selectedChars;
};
